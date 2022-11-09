// slide
$(document).ready(function () {
  $(function () {
    var $parent = $(".slide-show-item");
    $check = $parent.attr("data-item");
    // console.log($parent);
    // console.log($check);

    if ($check == 5) {
      $check = true;
    } else {
      if ($check > 5) {
        $check = false;
      } else {
        $check = true;
      }
    }
    console.log($check);
    if ($check) {
      var $chil = $parent.children().clone();
      $parent.append($chil);
    }
    $('.slide-show-item').slick({
      dots: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 5,
      arrows:false,
      // asNavFor: '.thumbs',
    });
    // console.log($check);
  });

 
  // var $thumbs = $('.thumbs').attr('data-item');
  // console.log($thumbs);

  // if($thumbs <= 5){
  //   $thumbs = false;
  // }
  // else{
  //   $thumbs = true;
  // }

  // console.log($thumbs);

  // $('.thumbs').slick({
  //   dots: false,
  //   speed: 300,
  //   slidesToShow: 5,
  //   slidesToScroll: 5,
  //   arrows:false,
  //   infinite: $thumbs,
  //   asNavFor: '.slide-show-item',
  //   // focusOnSelect: true,
  //   // Swipe: true,
  // });
  // $('.thumbs .slick-slide').removeClass('slick-active');
  // //set active class to first thumbnail slides
  // $('.thumbs .slick-slide').addClass('slick-active');
  // end slide
});

$(document).ready(function () {
  $(".post2 .slide-show-list").slick({
    slidesToShow: 5,
    slidesToScroll: 5,
  });
});
$(document).ready(function () {
  $(".wrapper-content-page .bot-block .tab-content .product-tab .slide-show-list").slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
  });
});
// reamle
$(document).ready(function () {
  $(".pav-slideShow").slick({
    arrows: true,
    dots: false,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  });
});
