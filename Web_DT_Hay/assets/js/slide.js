//slide show
$(document).ready(function () {
  $(".slide-show-item").slick({
    dots: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".thumbs",
  });
  var $thumbs = $(".thumbs").attr("data-item");
  if ($thumbs <= 5) {
    $thumbs = false;
  } else {
    $thumbs = true;
  }
  $(".thumbs").slick({
    dots: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    infinite: $thumbs,
    asNavFor: ".slide-show-item",
    focusOnSelect: true,
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
  // product
  $(".post2 .slide-show-list").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
  });
  $(".wrapper-content-page .bot-block .tab-content .product-tab .slide-show-list").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
  });
//end product
});
