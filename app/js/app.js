// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

// import './bootstrap-5-autocomplete/autocomplete.js'
import 'slick-carousel'


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

    $('.burger').on('click', function () {
        $('.nav-mobile, .overlay, .burger').toggleClass('show')
        $('html, body').toggleClass('_over-hidden')
    })

    $('.overlay').on('click', function () {
        $('.nav-mobile, .overlay, .burger').removeClass('show')
        $('html, body').removeClass('_over-hidden')
    })


    $('#callMeBack, .call-me, .card-info > .button:first-of-type').on('click', function (e) {
        e.preventDefault()
        $('.callback-popup, .overlay-2').toggleClass('show')
        $('html, body').toggleClass('_over-hidden')
    })

    $('.callback-popup .close, .overlay-2').on('click', function (e) {
        e.preventDefault()
        $('.callback-popup, .overlay-2').removeClass('show')
        $('html, body').removeClass('_over-hidden')
    })

    $('.videos-list').slick({
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

})
