$(document).ready(function () {
    $(".menu_mobile").click(function() {
        $(".mega_menu_mb").toggleClass("menu_show");
      });
      $(".close_all").click(function() {
        $(".mega_menu_mb").removeClass("menu_show");
      });
      $(".icon").click(function() {
        $(" .mega_menu_mb .highlight").toggleClass("menu_show");
        $(".mega_menu_mb").removeClass("menu_show");
      });
});