$(document).ready(function(){
  $('.slide-show-item').slick({
    dots: true,
    speed: 300,
    slidesToShow: 1,
    arrows:false,
  });
});
$(document).ready(function(){
  $('.thumbs').slick({
    dots: false,
    speed: 300,
    Swipe: true,
    slidesToShow: 5,
    arrows:false,
  });
});


