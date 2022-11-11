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
    $('#readmore_desc').click(function () {
        $readmore = $('#box_content_info').css({ "max-height": "none", "overflow": "inherit" });
    });
    $('#readmore_desc').click(function () {
        $readmore = $('#box_content_info').css({ "max-height": "none", "overflow": "inherit" });
    });
    //end
    // fix famre left
    var $sticky_right = $('#sticky_right');
    var $height_sidebar = $sticky_right.outerHeight();
    var $height_start = $('#start-fixed').offset().top; // 20px padding 
    var $height_stop = $('#stop-fixed').offset().top - $height_sidebar;

    console.log($height_start);
    // check khi moi load page chua scroll
    // if ($(window).scrollTop() >= $height_stop ) { //|| $(window).scrollTop() <= $height_start
    //     $sticky_right.removeClass('fixed');
    // }
    // check khi user tien hanh scroll
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        // Do something
        console.log(scroll + ' ------- ' + $height_stop);
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
        // đại loại là nó detect như vậy, nó sẽ canh chính xác px cái sidebar + - x / để js....
        // nhưng mà css nó đã xử lý bao gồm hết ròi, cơ bản th css nó cũng như th js mà thoi...
        // thấy nó cũng rảnh á chớ :)) có khi thời điểm đó nó chưa biết là sticky của css
        // má thấy nó làm đúng rườm rà , logic ẩu vl :))  :)))  cái j ta, reactjs gì đó....
        // bọn nó cũng chơi sạch = js hay sao á :v tao ko hiểu nổi cái đấy ... thấy nhiều cái đơn giản
        // mà làm phức làm tốn tg vl :))) má nhiều logic famework vc :))
        // nếu mà dùng ngôn ngữ khác để backend rồi, js chỉ để xử lý sự kiện này nọ nhẹ nhàng, trung bình....
        // ý kiến tao thấy :v th jquery nó bao luôn hết ... mà nó dc bọn stackover support nhiều vl luôn
        //t thấy jquery cũng tiện á, nay coi m để coi cách m search key word sao :)))
        // m nghĩ gì thì search% vậy là dc à
        //oke ths m nha kkk bye m ngủ ngon
    });
});


