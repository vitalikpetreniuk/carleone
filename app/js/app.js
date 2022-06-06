// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

// import './bootstrap-5-autocomplete/autocomplete.js'
import 'slick-carousel'
import lightbox from 'lightbox2'
import Typed from "typed.js";
import '../js/jRange-master/jquery.range.js'
import '../js/jStarbox-master/jstarbox.js'


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
        // $this.next().slideToggle()
        $this.next().toggleClass('active')
    })

    // Input range
    $('.slider-range').jRange({
        from: $('#minValueRange').val(),
        to: $('#maxValueRange').val(),
        step: 1,
        format: '%s',
        width: 238,
        showLabels: true,
        isRange : true
    })

    $('#fromYear').on('change', function () {
        $('#sendYear').attr('href', $(this).val() + '-' + $('#toYear').val() + '/')
    })
    $('#toYear').on('change', function () {
        $('#sendYear').attr('href', $('#fromYear').val() + '-' + $(this).val() + '/')
    })

    $('#sendPrice').attr('href', $('#urlRange').val() + $('.slider-range').val().replace(',', '-') + '/')

    $('.slider-range').on('change', function () {
        $('#sendPrice').attr('href', $('#urlRange').val() + $('.slider-range').val().replace(',', '-') + '/')
        // $('#from option[selected]').text($('.slider-range').val().split(',')[0])
        // $('#toPrice option[selected]').text($('.slider-range').val().split(',')[1])
        // $("#from").val($("#from option:first").val());
        // $("#toPrice").val($("#toPrice option:first").val());
    })

    // Custom Starbox
    if ($('#customStarts').length) {
        $('#customStarts').starbox({
            stars: 5,
            buttons: 10,
            changeable: 'once',
            autoUpdateAverage: true,
        })
        if (localStorage.getItem('post_')) {
            $('#customStarts').starbox("setValue", localStorage.getItem('post_'));
        }else {
            $('#customStarts').starbox("setValue", ($('#customStarts').attr("data-rate")));
        }
    }


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

    if ($('#typing').length) {
        const typed = new Typed('#typing', {
            strings: $('#typing-country')[0].textContent.split(','),
            typeSpeed: 150,
            backSpeed: 70,
            backDelay: 2500,
            startDelay: 100,
            loop: true,
            loopCount: 'infinite',
            contentType: 'html',
        });
    }

    let brand_id

    $('.tabs li').on('click', function (e) {
        e.preventDefault()
        $('.tabs li').removeClass('active')
        brand_id = $(this).attr('id');
        if (brand_id !== 'all') {
            $(this).addClass('active');
            $('.catalog-list.split .card').removeClass('hidden');
            $('.catalog-list.split .card').not('.'+brand_id).addClass('hidden');
        } else {
            $(this).addClass('active');
            $('.catalog-list.split .card').removeClass('hidden')
        }
    })

    $('.choice-list__element').on('click', function (e) {
        e.preventDefault()
        $('.tabs li').removeClass('active')
        let type_car = $(this).attr('id');
        $('.catalog-list.split .card').removeClass('hidden');
        $('.catalog-list.split .card').not('.'+type_car).addClass('hidden');
    })

    $('.choice-list__element a').on('click', function () {
        let href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, {
            duration: 0,
            easing: "linear"
        });
    })
})
