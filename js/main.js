const swiperTop = new Swiper('.top__swiper', {
//   direction: 'horizontal',
 effect: 'fade' ,


 autoplay: {
    delay:200000,
    disableOnInteraction: false,
 },

  pagination: {
  el: ".swiper-pagination"
 },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


const swiperAbout = new Swiper(".about__slider", {
    slidesPerView: 4,
    spaceBetween: 20,
    grabCursor: true,
    mousewheel: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

    document.querySelectorAll(".accordeon__triger").forEach((item) => {
        item.addEventListener("click", () => {
            item.parentNode.classList.toggle("accordeon__item--active")
        })
    });
    


