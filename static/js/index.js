window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
	
    var options = {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        infinite: true,
        autoplay: false, 
        autoplaySpeed: 5000,
        pagination: true, // Dots at the bottom
        navigation: true, // The Next/Prev arrows
        
        breakpoints: [
            { changePoint: 480, slidesToShow: 1, slidesToScroll: 1 },
            { changePoint: 640, slidesToShow: 1, slidesToScroll: 1 },
            { changePoint: 768, slidesToShow: 1, slidesToScroll: 1 }
        ]
    };

    // Initialize all carousels 
    bulmaCarousel.attach('.carousel', options);
    
    // Initialize the slider extension
    bulmaSlider.attach();
});