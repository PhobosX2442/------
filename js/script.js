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
            settings: {slidesToShow: 3, arrows: false}},
            {breakpoint: 700,
            settings: {slidesToShow: 2, arrows: false}},
            {breakpoint: 500,
            settings: {slidesToShow: 1, arrows: false}}
        ]
    });
})

// Слайдер выставки
$(document).ready(function() {
    $('.galery').slick({
        slidesToShow: 1,
        infinite: false,
        responsive:[
            {breakpoint: 1000,
            settings : {arrows: false}}
        ]
    })})

// Слайдер мастер-классов
$(document).ready(function() {
    $('.teach').slick({
        slidesToShow: 1,
        infinite: false,
        responsive:[
            {breakpoint: 1000,
            settings : {arrows: false}}
        ]
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
            settings: {slidesToShow: 3, arrows: false}},
            {breakpoint: 700,
            settings: {slidesToShow: 2, arrows: false}},
            {breakpoint: 500,
            settings: {slidesToShow: 1, arrows: false}}
        ]
    })})

// Шапка скролл
$(function() {
    $(window).scroll(function() {
var scroll = $(window).scrollTop();
if (scroll >= 1) {
            $(".header").addClass('scroll');
            $(".about").addClass('scroll');
            $(".header__picture").addClass('scroll');
} else {
            $(".header").removeClass("scroll");
            $(".about").removeClass("scroll");
            $(".header__picture").removeClass("scroll");
        }
    });
});

// Кнопка "Читать далее"
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Читать больше";
    moreText.style.display = "none";
    } else {
    dots.style.display = "none";
    btnText.innerHTML = "Читать меньше";
    moreText.style.display = "inline";
    }
}