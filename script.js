document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-carousel', {
        cover      : true,
        rewind     : true,
        pagination : false,
        rewindSpeed: 1000,
        rewindByDrag: true,
        heightRatio: 0.4,
    } ).mount();
} );
