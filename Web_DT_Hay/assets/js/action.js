
console.log('start');
var swiper = new Swiper(".slide-show .mySwiper", {
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
// SẢN PHẦM BÁN CHẠY
// var swiper1 = new Swiper(".mySwiper3", {
//   slidesPerView: 5,
//   loop:true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
  
// });
// console.log('end');

