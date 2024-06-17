$(document).ready(function () {

    let item_size = $('.item').eq(0).outerWidth() + 50;
    let item_length = $('.item').length;

    let fist_pos = 0;
    let last_pos = 0;

    function pos_init() {
        let b_center = $('.main_banner_img').offset().left + ($('.main_banner_img').width() / 2);
        let base_pos = b_center - (item_size / 2)

        console.log(b_center)

        let half_lenfth = Math.floor(item_length / 2);

        for (let i = half_lenfth; i < (item_length); i++) {
            $('.item').eq(i % item_length).css({
                left: base_pos + (item_size * (i - half_lenfth))
            })
            last_pos = base_pos + (item_size * (i - half_lenfth))
        }
        console.log("last_pos: " + last_pos)


        for (let i = half_lenfth - 1; i >= 0; i--) {
            console.log(i % item_length)
            $('.item').eq(i % item_length).css({

                left: base_pos - (item_size * Math.abs(i - 1 - 2))

            })
            fist_pos = base_pos - (item_size * Math.abs(i - 1 - 2))
        }
        console.log("fist_pos: " + fist_pos)
    }
    pos_init();

    $(window).resize(function () {
        pos_init();
        bang_no = 0
    })


    let bang_bn_count = $('.item').length;
    for (let i = 0; i < bang_bn_count; i++) {
        $('.bang_indi').append(`<div class="bang_circle"></div>`)
    }
    $('.bang_circle').eq(0).addClass('bang_circle_active')

    let bang_timer = 300;
    let bang_no = 0
    $(document).on('click', '.btn_item_R', function () {
        prevent_btn_slide()


        $('.item').animate({
            left: `-=${item_size}px`
        }, bang_timer, 'linear')


        $('.item').eq(bang_no % item_length).animate({

            left: last_pos
        }, 0)


        bang_no += 1;



    })
    $(document).on('click', '.btn_item_L', function () {
        prevent_btn_slide()

        bang_no -= 1;

        console.log(fist_pos)
        $('.item').eq((bang_no) % item_length).animate({

            left: fist_pos - item_size
        }, 0)


        $('.item').animate({
            left: `+=${item_size}px`
        }, bang_timer, 'linear')

    })






    let bang_interval;
    function bang_slide() {
        bang_interval = setInterval(function () {
            $('.btn_item_R').trigger('click')
        }, bang_timer + 3000);
    }
    bang_slide()

    $('.banner_box').hover(function () {
        clearInterval(bang_interval);
    }, function () {
        bang_slide()
    });


    function prevent_btn_slide() {

        $('.btn_item').css({ pointerEvents: 'none' })
        setTimeout(function () {
            $('.btn_item').css({ pointerEvents: 'auto' })
        }, bang_timer)
    }

    let sec1_o_top = $('.game_h1').offset().top;
    let sec2_o_top = $('.game_box11_img').offset().top;
    let sec3_o_top = $('.game_box0_img').offset().top;
    $(window).scroll(function () {
        let s_top = $(window).scrollTop();
        if (sec1_o_top <= s_top) {
            $('.move_bg0').css({
                right: '-10%',
                top: '15%',
                transform: 'translate(50%, -50%)'

            })
            if($(window).width()<=1024){
                if (sec1_o_top <= s_top) {
                    $('.move_bg0').css({
                        right: '20%',
                        top: '15%',
                        transform: 'translate(50%, -50%)'
                    })
                } 
            }
        }
        else {
            $('.move_bg0').css({
                right: '-100%',
                transform: 'translate(0%, -50%)',
            })
        }
        if (sec2_o_top <= s_top) {
            $('.move_bg1').css({
                left: '-50%',
                top: '35%',
                transform: 'translate(50%, -50%)'


            })
            if($(window).width()<=1024){
                if (sec2_o_top <= s_top) {
                    $('.move_bg1').css({
                        left: '-20%',
                        top: '35%',
                        transform: 'translate(50%, -50%)'
                    })
                }
            }
        }
        else {
            $('.move_bg1').css({
                left: '-100%',
                transform: 'translate(0%, -50%)',

            })

        }
        if (sec3_o_top <= s_top) {
            $('.move_bg2').css({
                right: '-10%',
                top: '60%',
                transform: 'translate(50%, -50%)'
            })
            if($(window).width()<=1024){
                if (sec3_o_top <= s_top) {
                    $('.move_bg2').css({
                        right: '20%',
                        top: '60%',
                        transform: 'translate(50%, -50%)'
        
                    })
        
                }
                
            }
        }
        else {
            $('.move_bg2').css({
                right: '-100%',
                transform: 'translate(0%, -50%)',
            })
        }
    });

    $('.go_top').click(function () {

        event.preventDefault();


        console.log($(this).attr('href'))
        let href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 500)
    })

   $(".menu_box").click(function(){
    $(".menu_btn").stop().slideToggle();
    $(".menu_btn").css({
        "width":"200px",
        "height":"300px"
    })
   })
   
});

