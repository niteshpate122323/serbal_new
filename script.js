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


    // // Function to handle scroll and add the 'visible' class to each card
    // function onScroll() {
    //     const cards = document.querySelectorAll('.card'); // Select all cards
  
    //     // Loop through all cards and check if each card is in the viewport
    //     cards.forEach(card => {
    //       const rect = card.getBoundingClientRect();
  
    //       // If the card is in the viewport (or almost)
    //       if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    //         card.classList.add('visible');
    //       }
    //     });
    //   }
  
    //   // Listen for scroll event
    //   window.addEventListener('scroll', onScroll);
  
    //   // Check on load in case the elements are already in the viewport
    //   window.addEventListener('load', onScroll);