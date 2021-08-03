// Carousel
"use strict";
$( document ).ready( init );

function init() {
    var owl = $( ".owl-carousel" );
    owl.owlCarousel( {
        items: 1,
        loop: true,
        margin: 0,
        center: true,
        autoplay: true,
        animateOut: "fadeOut",
        dots: false,
        autoplayTimeout: 3000,

        center: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    } );
    // Swiper Carousel
    new Swiper( ".user-slider", {
        loop: true,

        effect: "fadeOut",
        speed: 600,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        slidesPerView: "auto",
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    } );

    // Typed Animation
    var typed = new Typed( ".typed", {
        strings: [
            "startup creative",
            "up to date on design",
            "expert and committed",
            "the best in the world!",
            "the creator of beauty",
        ],
        typeSpeed: 100,
        loop: true,
    } );

    AOS.init( {
        // Global settings:
        disable: false,
        offset: 120,
        duration: 900,
        easing: "ease-in-out",
        once: false,
        mirror: false,
        anchorPlacement: "top-bottom",
    } );
    AOS.init();
}