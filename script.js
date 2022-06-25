const menu_burger = document.querySelector('.menu-burger');
const menu = document.querySelector('.header-menu');
const body = document.querySelector('body');
const header = document.querySelector('.header');

menu_burger.addEventListener('click', function (e) {
    menu_burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
    header.classList.toggle('active');
});


window.addEventListener('scroll', function (e) {
    header.classList.toggle('fixed', window.scrollY > 0);
});

const thumbsSwiper = new Swiper('.main-slider_mini', {
    slidesPerView: 3,
});

new Swiper('.main-slider', {

    thumbs: {
        swiper: thumbsSwiper
    },

    autoHeight: true,

});

new Swiper('.reviews-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

});