
$(document).ready(function () {
  $(".slide-show-item").slick({
    dots: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".thumbs",
  });
  $(".thumbs").slick({
    dots: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    infinite: false,
    asNavFor: ".slide-show-item",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  });
  // slide realme
  $(".pav-slideShow").slick({
    arrows: true,
    dots: false,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  });
  // // product
  $(".post2 .slide-show-list").slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 990,
        settings: "unslick",
      },
    ],
  });

  $(".wrapper-content-page .slide-show-list").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 990,
        settings:"unslick",
      },
    ],
  });
//end product
});
