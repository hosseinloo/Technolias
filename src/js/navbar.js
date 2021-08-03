// Burger and Slide navigation
$(document).ready(function() {
    let activeBurger = false;

    $('.menu').click(function() {
        if (!activeBurger) {
            $('#header').addClass('border-radius-zero');
            $('.menu').children().removeClass('bx-menu');
            $(this).children().addClass('bx-x');
            $('ul.navbar-nav').slideToggle(1000);
            activeBurger = true;
        } else {
            $('#header').removeClass('border-radius-zero');
            $(this).children().removeClass('bx-x');
            $(this).children().addClass('bx-menu');
            $('ul.navbar-nav').slideToggle(1000);
            activeBurger = false;
        }
        
        
    })
})