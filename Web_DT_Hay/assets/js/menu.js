$(document).ready(function () {
  $(".menu_mobile").click(function () {
    $(".mega_menu_mb").toggleClass("menu_show");

  });
  $(".close_all").click(function () {
    $(".close").removeClass("menu_show");
    $(".toggle_parent").removeClass("active");

  });
  $(".toggle_parent .icon").click(function () {
    var $this = $(this);
    var $parent = $this.parent('.toggle_parent');
    $parent.addClass('active');
  });
  $(".highlight .label .back_icon").click(function () {
    console.log('a');
    $(".toggle_parent").removeClass("active");
    // var $this = $(this);
    // var $parent = $this.parent('.highlight');
    // var $prev = $parent.prev();
    // if($prev.hasClass('active')){
    //   $prev.removeClass('active');
    // }
  });
});