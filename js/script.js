$(document).ready(function() {
    $('.works').slick({
        adaptiveHeight: true,
        slidesToShow: 6,
        responsive:[
            {breakpoint: 1300,
            settings: {slidesToShow: 4}}
        ]
    });
})

$(document).ready(function() {
    $('.galery').slick({
        slidesToShow: 1,
        infinite: false
    })})

$(function() {
    $(window).scroll(function() {
var scroll = $(window).scrollTop();
if (scroll >= 1) {
            $(".header").addClass('scroll');
            $(".header__picture").addClass('scroll');
} else {
            $(".header").removeClass("scroll");
            $(".header__picture").removeClass("scroll");
        }
    });
});