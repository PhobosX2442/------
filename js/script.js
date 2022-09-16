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