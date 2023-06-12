$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 2
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})