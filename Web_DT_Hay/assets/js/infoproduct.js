//xem thêm thông tin
$(document).ready(function () {
    $('.view-more-detail-char').click(function () {
        $('.popup-characteristic').css("display", "block");
        $('.modal-menu-full-screen').css("display", "block");
    });
    // nút close
    $('.popup-characteristic .close').click(function () {
        $('.popup-characteristic').css("display", "none");
        $('.modal-menu-full-screen').css("display", "none");
    });
    //end
    // readmore
    $view = $('#box_content_info');
    $read=$('.readmore');
    $hideview=('#readany_desc');

    $($read).click(function () {
        // set css cho clas
        $view.css({ "max-height": "none", "overflow": "inherit" });
        // thay doi class
        $read.toggleClass("hide")
    });
    $($hideview).click(function () {
        // set css cho clas
        $view.css({ "max-height": "400", "overflow": "hidden" });
    });
    //end
    // fix famre left
    var $sticky_right = $('#sticky_right');
    var $height_sidebar = $sticky_right.outerHeight();
    var $height_start = $('#start-fixed').offset().top; // 20px padding 
    var $height_stop = $('#stop-fixed').offset().top - $height_sidebar;
    // check khi moi load page chua scroll
    // check khi user tien hanh scroll
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        // Do something
        if (scroll < $height_start){
            $sticky_right.removeClass('fixed absolute');
        }
        if (scroll > $height_start ){
            $sticky_right.addClass('fixed');
        }
        if(scroll >= $height_stop){
            $sticky_right.removeClass('fixed');
            $sticky_right.addClass('absolute');
        }
        
    });
});


