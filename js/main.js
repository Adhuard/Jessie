$(document).ready(function () {
    $(".main-jobs-wrapper").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        Infinity: true,
        centerMode: true,
        centerPadding: "0px", /* отступ от 3х уже видимых слайдов*/
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        responsive: [
            {
                breakpoint: 1165,
                settings:{
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings:{
                slidesToShow: 1,
                }
            }
        ]

    })
    $(".slick-prev").text(">");
    $(".slick-next").text(">");
})