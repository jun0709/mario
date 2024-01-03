

    function initializeSwiper(selector) {
        return new Swiper(selector, {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 300,
            },
            speed: 3000,
            loop: true,
            direction: 'horizontal',
            effect: 'coverflow'
        });
    }
    
    var swiperArray = [];
    
    for (let i = 1; i <= 6; i++) {
        const swiper = initializeSwiper(`.mySwiper${i}`);
        swiperArray.push(swiper);
    
        $(`#new_arr`).hover(function () {
            swiper.autoplay.stop();
        }, function () {
            swiper.autoplay.start();
        });
    }
    
    $('.main_nav_li').click(function () {
        const index = $(this).index();
        console.log(index);
        $('.mySwiper').removeClass('display_block');
        $('.mySwiper').eq(index).addClass('display_block');
        
    });
