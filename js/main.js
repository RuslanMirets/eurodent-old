$(function () {

   
    $('.patients__slider').slick({
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="patients__slider-btn__left"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="patients__slider-btn__right"><img src="images/arrow-right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                }
            },
            {
                breakpoint: 810,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            },
        ]
    });

    $('.reviews__slider').slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="patients__slider-btn__left"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="patients__slider-btn__right"><img src="images/arrow-right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 1110,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.interior__slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: '<button class="patients__slider-btn__left"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="patients__slider-btn__right"><img src="images/arrow-right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 1110,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    dots: false,
                }
            },
        ]
    });

    $('.professionals__slider').slick({
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="professionals__slider-btn__left"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="professionals__slider-btn__right"><img src="images/arrow-right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 830,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 560,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.reviews-popup').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Загрузка изображения #%curr%...',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        }
    });

    $('.interior-popup').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Загрузка изображения #%curr%...',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        }
    });
    $('.patients-popup').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Загрузка изображения #%curr%...',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        }
    });

    $(document).ready(function () {
        $('.popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    });

    $(document).ready(function () {
        $('.popup-form').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#name',
            callbacks: {
                beforeOpen: function () {
                    if ($(window).width() < 700) {
                        this.st.focus = false;
                    } else {
                        this.st.focus = '#name';
                    }
                }
            }
        });
    });

    $(function () {
        $(".phone").mask("+7(999)999-99-99");
    });

    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active')
    });
});