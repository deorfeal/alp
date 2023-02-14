AOS.init();
$(function () {
    $('.header-top__burger').on('click', function (event) {
        let ourBody =  $('.body')
        if ( ourBody[0].classList.contains('body-services') ) {
            $('.body').toggleClass('body-services--active');
        }
        $('.body').toggleClass('body--active');
    });
})


// $(function () {
//     var mixer = mixitup('.draws-info__inner', {
//         load: {
//             filter: '.draw'
//         },
//         animation: {
//             enable: false
//         },
//     });
// })

// $(function () {
//     var containerEl1 = document.querySelector('[data-ref="container-1"]');
//     var containerEl2 = document.querySelector('[data-ref="container-2"]');

//     var config = {
//         controls: {
//             scope: 'local'
//         },
//         load: {
//             filter: '.item-first',
//         },
//         animation: {
//             effects: 'fade scale(0%)',
//             duration: 0,
//         },
//     };
//     var confiG = {
//         controls: {
//             scope: 'local'
//         },
//         load: {
//             filter: '.item-firstt',
//         },
//         animation: {
//             effects: 'fade scale(0%)',
//             duration: 0,
//         },
//     };

//     var confiGG = {
//         controls: {
//             scope: 'local'
//         },
//         load: {
//             filter: '.item-first',
//         }
//     };

//     var mixer1 = mixitup(containerEl1, config);
//     var mixer1 = mixitup(containerEl2, confiG);

// })

new Swiper('.main-recalls-swiper', {
    slidesPerView: 2,
    loop: true,
    spaceBetween: 30,
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },
    breakpoints: {
        301: {
            slidesPerView: 1,
            loop: true,
            spaceBetween: 30,
        },
        701: {
            slidesPerView: 1.3,
            loop: true,
            spaceBetween: 30,
        },
        761: {
            slidesPerView: 1.4,
            loop: true,
            spaceBetween: 30,
        },
        1001: {
            slidesPerView: 1.6,
            loop: true,
            spaceBetween: 30,
        },
        1201: {
            slidesPerView: 2,
            loop: true,
            spaceBetween: 30,
        },
    }
});