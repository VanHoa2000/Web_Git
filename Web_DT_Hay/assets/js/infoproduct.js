//xem thêm thông tin
$(document).ready(function() {
    $('.view-more-detail-char').click(function() {
        $('.popup-characteristic').css("display","block");
        $('.modal-menu-full-screen').css("display","block");
    });
    // nút close
    $('.popup-characteristic .close').click(function() {
        $('.popup-characteristic').css("display","none");
        $('.modal-menu-full-screen').css("display","none");
    });
    //end
    // readmore
    $('#readmore_desc').click(function() {
        $readmore=$('#box_content_info').css({"max-height":"none","overflow":"inherit"}); 
     });
     $('#readmore_desc').click(function() {
        $readmore=$('#box_content_info').css({"max-height":"none","overflow":"inherit"}); 
     });
     //end
     // fix famre left
     
});


