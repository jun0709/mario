$(function () {
    $(".menu_box").click(function () {
        $(".menu_btn").stop().slideToggle();
        $(".menu_btn").css({
            "width": "200px",
            "height": "300px"
        })
    })
    $('.main_nav_li').on('click', function () {
        var index = $(this).index();


        $('.item_list').removeClass('active');


        $('.item_list').eq(index).addClass('active');
    });
})
