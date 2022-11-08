$(document).ready(function(){
  $('.slide-show-item').slick({
    dots: true,
    speed: 300,
    slidesToShow: 1,
    arrows:false,
    asNavFor: '.thumbs',
  });
});
$(document).ready(function(){
  $('.thumbs').slick({
    dots: false,
    speed: 300,
    Swipe: true,
    slidesToShow: 5,
    arrows:false,
    infinite:false,
    asNavFor: '.slide-show-item',
    focusOnSelect: true,
  });
});
$('.thumbs .slick-slide').removeClass('slick-active');
//set active class to first thumbnail slides
$('.thumbs .slick-slide').eq(0).addClass('slick-active');

$(document).ready(function(){
  $('.post2 .bot-block .tab-content .product-tab .slide-show-list').slick({
    slidesToShow: 5,
    slidesToScroll: 5
  });
});
$(document).ready(function(){
  $('.wrapper-content-page .bot-block .tab-content .product-tab .slide-show-list').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
  });
});
// reamle
$(document).ready(function(){
  $('.pav-slideShow').slick({
    arrows:true,
    dots: false,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed:1000,
  });
});



