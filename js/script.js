// Слайдер игрушки
$(document).ready(function() {
    $('.works').slick({
        adaptiveHeight: true,
        slidesToShow: 6,
        responsive:[
            {breakpoint: 1420,
            settings: {slidesToShow: 5}},
            {breakpoint: 1220,
            settings: {slidesToShow: 4}},
            {breakpoint: 1000,
            settings: {slidesToShow: 3}},
            {breakpoint: 600,
            settings: {slidesToShow: 2}},
            {breakpoint: 400,
            settings: {slidesToShow: 1}}
        ]
    });
})

// Слайдер выставки
$(document).ready(function() {
    $('.galery').slick({
        slidesToShow: 1,
        infinite: false
    })})

// Слайдер мастер-классов
$(document).ready(function() {
    $('.teach').slick({
        slidesToShow: 1,
        infinite: false
    
    })})

// Слайдер отзывов
$(document).ready(function() {
    $('.otzivi').slick({
        adaptiveHeight: true,
        slidesToShow: 6,
        responsive:[
            {breakpoint: 1420,
            settings: {slidesToShow: 5}},
            {breakpoint: 1220,
            settings: {slidesToShow: 4}},
            {breakpoint: 1000,
            settings: {slidesToShow: 3}},
            {breakpoint: 600,
            settings: {slidesToShow: 2}},
            {breakpoint: 400,
            settings: {slidesToShow: 1}}
        ]
    })})

// Шапка скролл
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
