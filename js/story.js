
$(document).ready(function() {
    document.querySelector(".m_vo1").addEventListener("click", function () {
        var audio1 = new Audio("./medio/01 It's A Me, Mario!.mp3");
        audio1.play();// sound1.mp3 재생
    });
    document.querySelector(".m_vo2").addEventListener("click", function () {
        var audio3 = new Audio("./medio/마리오.mp3");
        audio3.play();// sound1.mp3 재생
    });
    document.querySelector(".m_vo3").addEventListener("click", function () {
        var audio3 = new Audio("./medio/마리오1.mp3");
        audio3.play();// sound1.mp3 재생
    });
    document.querySelector(".l_vo1").addEventListener("click", function () {
        var audio2 = new Audio("./medio/루이지-와아오.mp3");
        audio2.play();// sound1.mp3 재생
    });
    document.querySelector(".l_vo2").addEventListener("click", function () {
        var audio2 = new Audio("./medio/이쯔 루이지따임.mp3");
        audio2.play();// sound1.mp3 재생
    });
    document.querySelector(".l_vo3").addEventListener("click", function () {
        var audio2 = new Audio("./medio/루이지1.mp3");
        audio2.play();// sound1.mp3 재생
    });
    document.querySelector(".k_vo1").addEventListener("click", function () {
        var audio2 = new Audio("./medio/키노피오1.mp3");
        audio2.play();// sound1.mp3 재생
    });
    document.querySelector(".k_vo2").addEventListener("click", function () {
        var audio2 = new Audio("./medio/키노피오2.mp3");
        audio2.play();// sound1.mp3 재생
    });
    document.querySelector(".k_vo3").addEventListener("click", function () {
        var audio2 = new Audio("./medio/키노피오3.mp3");
        audio2.play();// sound1.mp3 재생
    });
    document.querySelector(".y_vo1").addEventListener("click", function () {
        var audio2 = new Audio("./medio/요시.mp3");
        audio2.play();// sound1.mp3 재생
    });

    document.querySelector(".y_vo2").addEventListener("click", function () {
        var audio2 = new Audio("./medio/요시1.mp3");
        audio2.play();// sound1.mp3 재생
    });
    document.querySelector(".y_vo3").addEventListener("click", function () {
        var audio2 = new Audio("./medio/요시2.mp3");
        audio2.play();// sound1.mp3 재생
    });
    document.querySelector(".ku_vo1").addEventListener("click", function () {
        var audio2 = new Audio("./medio/쿠파1.mp3");
        audio2.play();// sound1.mp3 재생
    });

    document.querySelector(".ku_vo2").addEventListener("click", function () {
        var audio2 = new Audio("./medio/쿠파2.mp3");
        audio2.play();// sound1.mp3 재생
    });
    document.querySelector(".ku_vo3").addEventListener("click", function () {
        var audio2 = new Audio("./medio/쿠파3.mp3");
        audio2.play();// sound1.mp3 재생
    });
    document.querySelector(".pi_vo1").addEventListener("click", function () {
        var audio2 = new Audio("./medio/피치공주1.mp3");
        audio2.play();// sound1.mp3 재생
    });

    document.querySelector(".pi_vo2").addEventListener("click", function () {
        var audio2 = new Audio("./medio/피치공주2.mp3");
        audio2.play();// sound1.mp3 재생
    });
    document.querySelector(".pi_vo3").addEventListener("click", function () {
        var audio2 = new Audio("./medio/피치공주3.mp3");
        audio2.play();// sound1.mp3 재생
    });

    $('.nav_li a').click(function(){
        event.preventDefault(); 

        console.log($(this).attr('href'))

        let href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 1000)
    });
    $('.go_top').click(function(){
    
        event.preventDefault(); 


        console.log($(this).attr('href'))
        let href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 500)
    })


    $(".view").click(function(){
        $(this).parent().children(".outer").show()
    })
    $(".close_btn").click(function(){
        $(".outer").hide()
    })
    $(".menu_box").click(function(){
        $(".menu_btn").stop().slideToggle();
        $(".menu_btn").css({
            "width":"200px",
            "height":"300px"
        })
       })
})
