const imageOptions = {
    imagePath: 'images/1920/',
    thumbPath: 'images/thumbs/'
}

const naturePhotos = [
    { 
        'src': 'DJI_0152.JPG',
        'description' : 'Bilde 1: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0255.JPG',
        'description' : 'Bilde 2: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0261.JPG',
        'description' : 'Bilde 3: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0438.JPG',
        'description' : 'Bilde 4: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0457.JPG',
        'description' : 'Bilde 5: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0459.JPG',
        'description' : 'Bilde 6: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    }
];

const eventPhotos = [
    { 
        'src': 'DJI_0853.JPG',
        'description' : 'Bilde 1: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0856.JPG',
        'description' : 'Bilde 2: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0858.JPG',
        'description' : 'Bilde 3: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0899.JPG',
        'description' : 'Bilde 4: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0900.JPG',
        'description' : 'Bilde 5: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0905.JPG',
        'description' : 'Bilde 6: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    }
];

const propertyPhotos = [
    { 
        'src': 'DJI_0853.JPG',
        'description' : 'Bilde 1: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0856.JPG',
        'description' : 'Bilde 2: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0858.JPG',
        'description' : 'Bilde 3: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0899.JPG',
        'description' : 'Bilde 4: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0900.JPG',
        'description' : 'Bilde 5: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0905.JPG',
        'description' : 'Bilde 6: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0152.JPG',
        'description' : 'Bilde 1: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0255.JPG',
        'description' : 'Bilde 2: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0261.JPG',
        'description' : 'Bilde 3: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0438.JPG',
        'description' : 'Bilde 4: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0457.JPG',
        'description' : 'Bilde 5: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    },
    { 
        'src': 'DJI_0459.JPG',
        'description' : 'Bilde 6: Ipsum ea occaecat labore officia Lorem nulla nulla mollit sint qui incididunt.'
    }
];

const naturePhotosLightbox = new Lightbox('#nature-photos-lightbox', naturePhotos, imageOptions).mount();
const eventPhotosLightbox = new Lightbox('#event-photos-lightbox', eventPhotos, imageOptions).mount();
const propertyPhotosLightbox = new Lightbox('#property-photos-lightbox', propertyPhotos, imageOptions).mount();

imageSeries('#nature-photos', naturePhotos, naturePhotosLightbox);
imageSeries('#event-photos', eventPhotos, eventPhotosLightbox);
imageSeries('#property-photos', propertyPhotos, propertyPhotosLightbox);

function imageSeries(selector, images, lightbox) {
    images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = imageOptions.thumbPath + image.src;
        img.addEventListener('click', () => {
            lightbox.open(index);
        })
        img.className = 'image-series__image';
        document.querySelector(selector).append(img);
    });
}



