

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,  // Enables infinite looping
        margin: 10, 
        nav: false,  // Navigation arrows (true/false)
        dots: true,  // Show dots navigation
        autoplay: true,  // Enables automatic sliding
        autoplayTimeout: 3000,  // Slide change every 3 seconds
        autoplayHoverPause: true,  // Pause autoplay when hovering
        responsive: {
            0: { items: 1 },
            600: { items: 1 },
            1000: { items: 1 }
        }
    });
});