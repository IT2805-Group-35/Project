const lightboxTemplate = `
    <div class="lightbox__header">
        <span class="lightbox__image-count"></span>
        <span class="lightbox__btn lightbox__btn--close">×</span>
    </div>

    <div class="lightbox__content">
        <div class="lightbox__slides"></div>
        <div class="lightbox__thumbs"></div>
        <div class="lightbox__navigation">
            <span class="lightbox__btn lightbox__btn--previous-image">❮</span>
            <span class="lightbox__btn lightbox__btn--next-image">❯</span>
        </div>
    </div>

    <div class="lightbox__progress-bar-container">
        <div class="lightbox__progress-bar"></div>
    </div>
`;

class Lightbox {
    constructor(selector, images, options) {
        this.selector = selector;
        this.images = images;
        this.options = options;
        this.currentImageIndex =  0;
        this.nodes = [];
        this.isOpen = false;
    }

    mount() {
        this.node = document.querySelector(this.selector);
        this.node.innerHTML = lightboxTemplate;

        const thumbs = this.node.querySelector('.lightbox__thumbs');
        const slides = this.node.querySelector('.lightbox__slides');

        this.images.forEach((image, index) => {
            // Create nodes for each thumbnail
            const thumb = document.createElement('img');
            thumb.className = 'lightbox__thumb';
            thumb.src = this.options.thumbPath + image.src;
            thumb.addEventListener('click', () => this.gotoImage(index));
    
            // Create nodes for each slide
            const slide = document.createElement('div');
            const img = document.createElement('img');
            const p = document.createElement('p');
            slide.className = 'lightbox__slide';
            img.className = 'lightbox__image';
            p.className = 'lightbox__image-description';
            img.src = this.options.imagePath + image.src;
            p.textContent = image.description;
            slide.append(img,p);

            // Append nodes to DOM
            thumbs.append(thumb);
            slides.append(slide);

            // Add nodes to array 
            this.nodes.push({'slide': slide, 'thumb': thumb});
        });

        this.bindEventlisteners();

        return this;
    }

    open(imageIndex = this.currentImageIndex) {
        // The page we cover might have scrollbars, so we hide them.
        document.body.style.overflow = 'hidden';

        this.isOpen = true;
        this.node.classList.add('lightbox--show');
        this.gotoImage(imageIndex);
    }

    close() {
        if (!this.isOpen) return;
        // Show the scrollbar again
        document.body.style.overflow = '';

        this.isOpen = false;
        this.node.classList.remove('lightbox--show');
    }

    nextImage() {
        if (!this.isOpen) return;
        const nextImageIndex = 
            this.currentImageIndex == this.nodes.length - 1 ?
            0 : this.currentImageIndex + 1;

        this.gotoImage(nextImageIndex);
    }

    previousImage() {
        if (!this.isOpen) return;
        const previousImageIndex = 
            this.currentImageIndex == 0 ?
            this.nodes.length-1 : this.currentImageIndex - 1;

        this.gotoImage(previousImageIndex);
    }

    gotoImage(imageIndex) {
        this.setImageToInactive(this.currentImageIndex);
        this.currentImageIndex = imageIndex;
        this.setImageToActive(this.currentImageIndex);
        this.scrollThumbnails();
        this.updateProgress();
    }

    setImageToActive(imageIndex) {
        this.nodes[imageIndex]
            .slide
            .classList
            .add('lightbox__slide--active');
        this.nodes[imageIndex]
            .thumb
            .classList
            .add('lightbox__thumb--active');
    }

    setImageToInactive(imageIndex) {
        this.nodes[imageIndex]
            .slide
            .classList
            .remove('lightbox__slide--active');
        this.nodes[imageIndex]
            .thumb
            .classList
            .remove('lightbox__thumb--active');
    }

    scrollThumbnails() {
        const currentThumbOffsetLeft = this.nodes[this.currentImageIndex]
            .thumb
            .offsetLeft;
        const marginLeft = currentThumbOffsetLeft == 0 ?
            0 : -(currentThumbOffsetLeft*2)+75;
        this.node.querySelector('.lightbox__thumbs')
            .style.marginLeft = marginLeft+'px';
    }

    updateProgress() {
        const width = 100 * ((this.currentImageIndex+1) / this.nodes.length);
        this.node.querySelector('.lightbox__progress-bar')
            .style
            .width = width+'%';
        this.node.querySelector('.lightbox__image-count')
            .innerHTML = `${this.currentImageIndex+1} av ${this.nodes.length}`;
    }

    bindEventlisteners() {
        this.node.querySelector('.lightbox__btn--close')
            .addEventListener('click', () => this.close());
        this.node.querySelector('.lightbox__btn--previous-image')
            .addEventListener('click', () => this.previousImage());
        this.node.querySelector('.lightbox__btn--next-image')
            .addEventListener('click', () => this.nextImage());
        document.addEventListener('keyup', event => {
            switch(event.code) {
                case 'Escape':
                    this.close();
                    break;
                case 'ArrowLeft':
                    this.previousImage();
                    break;
                case 'ArrowRight':
                    this.nextImage();
                    break;
            }
        });
    }
}