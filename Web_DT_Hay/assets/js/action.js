
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  thumbs: {
    swiper:thumbs
  }
});

var thumbs = new Swiper(".thumbs .mySwiper2", {
  spaceBetween: 10,
  slidesPerView: 5,
  loop:false,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
   centeredSlides: true,
  centeredSlidesBounds: true,
});
