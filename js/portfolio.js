/*
 * This file is used to render image series and bind these to lightboxes so you can click on images
 * and view them in full screen views. It contains lightbox options and lists of images to be rendered.
 * 
 * It is used by portfolio.html, but could be used anywhere.
 */

// Thumbnail and image paths
const imageOptions = {
    imagePath: 'images/1920/',
    thumbPath: 'images/thumbs/'
}

// Photografy image series. Contains a list of filenames and photo descriptions. Is used to populate a lightbox.
// Is also used by the imageSeries function to render som images on the site, which can be clicked to open the lightbox.
const naturePhotos = [
    { 
        'src': 'DJI_0660.JPG.webp',
        'description' : 'Bilde 1: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0661.JPG.webp',
        'description' : 'Bilde 2: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0662.JPG.webp',
        'description' : 'Bilde 3: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0262.JPG.webp',
        'description' : 'Bilde 4: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0438.JPG.webp',
        'description' : 'Bilde 5: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0261.JPG.webp',
        'description' : 'Bilde 6: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0660.JPG.webp',
        'description' : 'Bilde 7: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0661.JPG.webp',
        'description' : 'Bilde 8: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0662.JPG.webp',
        'description' : 'Bilde 9: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0262.JPG.webp',
        'description' : 'Bilde 10: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0438.JPG.webp',
        'description' : 'Bilde 11: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0261.JPG.webp',
        'description' : 'Bilde 12: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    }
];

const eventPhotos = [
    { 
        'src': 'DJI_0905.JPG.webp',
        'description' : 'Bilde 1: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0853.JPG.webp',
        'description' : 'Bilde 2: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0004.JPG.webp',
        'description' : 'Bilde 3: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0899.JPG.webp',
        'description' : 'Bilde 4: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0900.JPG.webp',
        'description' : 'Bilde 5: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0905.JPG.webp',
        'description' : 'Bilde 6: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0905.JPG.webp',
        'description' : 'Bilde 7: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0853.JPG.webp',
        'description' : 'Bilde 8: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0004.JPG.webp',
        'description' : 'Bilde 9: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0899.JPG.webp',
        'description' : 'Bilde 10: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0900.JPG.webp',
        'description' : 'Bilde 11: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0905.JPG.webp',
        'description' : 'Bilde 12: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    }
];

const propertyPhotos = [
    { 
        'src': 'DJI_0457.JPG.webp',
        'description' : 'Bilde 1: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0262.JPG.webp',
        'description' : 'Bilde 2: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0463.JPG.webp',
        'description' : 'Bilde 3: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0899.JPG.webp',
        'description' : 'Bilde 4: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0900.JPG.webp',
        'description' : 'Bilde 5: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0905.JPG.webp',
        'description' : 'Bilde 6: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0152.JPG.webp',
        'description' : 'Bilde 7: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0255.JPG.webp',
        'description' : 'Bilde 8: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0261.JPG.webp',
        'description' : 'Bilde 9: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0438.JPG.webp',
        'description' : 'Bilde 10: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0457.JPG.webp',
        'description' : 'Bilde 11: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0459.JPG.webp',
        'description' : 'Bilde 12: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    }
];

// Create lightboxes for each list of images
const naturePhotosLightbox = new Lightbox('#nature-photos-lightbox', naturePhotos, imageOptions).mount();
const eventPhotosLightbox = new Lightbox('#event-photos-lightbox', eventPhotos, imageOptions).mount();
const propertyPhotosLightbox = new Lightbox('#property-photos-lightbox', propertyPhotos, imageOptions).mount();

// Create an image series for each of the lists of images. Link to their respective lightbox.
imageSeries('#nature-photos', 4, naturePhotos, naturePhotosLightbox);
imageSeries('#event-photos', 3, eventPhotos, eventPhotosLightbox);
imageSeries('#property-photos', 3, propertyPhotos, propertyPhotosLightbox);

// Takes a selector for a container and a list of images and displays the given quantity og them. 
// Links to the provided lightbox.
function imageSeries(selector, displayQuantity, images, lightbox) {
    const node = document.querySelector(selector);

    images.every((image, index) => {
        if (index >= displayQuantity) return false;

        const img = document.createElement('img');
        img.src = imageOptions.imagePath + image.src;
        img.addEventListener('click', () => {
            lightbox.open(index);
        })
        img.className = 'image-series__image';
        
        node.append(img);
        return true;
    });

    // This refers to the "Se mer" button under each image series.
    node.nextElementSibling.addEventListener('click', () => {
        lightbox.open();
    });
}



