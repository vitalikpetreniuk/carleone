// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

// import './bootstrap-5-autocomplete/autocomplete.js'
import 'slick-carousel'
import 'jquery-asRange'
import lightbox from 'lightbox2'


document.addEventListener('DOMContentLoaded', () => {

    const datasrc = [
        {label: 'Option 1', value: 'opt1'},
        {label: 'Option 2', value: 'opt2'},
        {label: 'Option 3', value: 'opt3'},
        {label: 'Option 4', value: 'opt4'},
        {label: 'Option 5', value: 'opt5'},
        {label: 'Option 6', value: 'opt6'},
        {label: 'Option 7', value: 'opt7'},
        {label: 'Option 8', value: 'opt8'},
        {label: 'Option 9', value: 'opt9'},
        {label: 'Option 10', value: 'opt10'},
        {label: 'Option 11', value: 'opt11'},
    ]

    const autoCompleteHeader = new Autocomplete(document.querySelector('.header-search .input'), {
        data: datasrc,
        maximumItems: 10
    });
    const autoCompleteMobile = new Autocomplete(document.querySelector('.nav-mobile .search .input'), {
        data: datasrc,
        maximumItems: 10
    });

    $('.burger, .header-button').on('click', function () {
        $('.nav-mobile, .overlay, .burger').toggleClass('show')
        $('html, body').toggleClass('_over-hidden')
    })

    $('.overlay, .filter .close').on('click', function () {
        $('.nav-mobile, .overlay, .burger, .filter').removeClass('show')
        $('html, body').removeClass('_over-hidden')
    })


    $('#callMeBack, .call-me, .card-info > .button:first-of-type, .page-category .card-info > .button-secondary, .page-product .card-info > .button-secondary, #openPopup, #calculateTheCost').on('click', function (e) {
        e.preventDefault()
        $('.callback-popup, .overlay-2').toggleClass('show')
        $('html, body').toggleClass('_over-hidden')
    })

    $('.callback-popup .close, .overlay-2').on('click', function (e) {
        e.preventDefault()
        $('.callback-popup, .overlay-2').removeClass('show')
        $('html, body').removeClass('_over-hidden')
    })

    $('.btn-filter').on('click', function () {
        $('.filter, .overlay').addClass('show')
        $('html, body').toggleClass('_over-hidden')
    })

    $('#mainVideos').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    })
    $('#productVideos').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    })


    // FAQ accordion
    $('.faq__question').on('click', function (e) {
        e.preventDefault()

        const $this = $(this)

        if (!$this.hasClass('active')) {
            $('.faq__answer').slideUp(400)
            $(".faq__question").removeClass("active");
        }

        $this.toggleClass('active')
        $this.next().slideToggle()

    })


    // Filter accordion
    $('.filter-head').on('click', function (e) {
        e.preventDefault()

        const $this = $(this)

        $this.parent().toggleClass('active')
        $this.next().slideToggle()
    })

    // Input range
    $('.rangePrice').asRange({
        range: true,
        limit: true,
        min: 0,
        max: 100,
        value: 2,
        tip: {
            active: 'onMove'
        }
    });


    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        arrows: false,
        slidesToShow: 10,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true,
    });

    $('ul.inset__caption').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.inset__wrapper').find('div.inset__content').removeClass('active').eq($(this).index()).addClass('active');
    });


    // scroll
    $('.why a').on('click', function() {

        let href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, {
            duration: 0,
            easing: "linear"
        });

        return false;
    });

    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'disableScrolling': true
    })

})
