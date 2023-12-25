
    // var swiper1 = new Swiper(".mySwiper1", {
    //     slidesPerView: 3, 
    //     spaceBetween: 30,
    //     pagination: {
    //         el: ".swiper-pagination",
    //         clickable: true,
    //     },
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },
    //     autoplay: {
    //         delay: 400, 
    //     },
    //     speed: 1000, 
    //     loop: true,
    //     direction: 'horizontal', 
    //     effect: 'coverflow'
    // });

    // $('#new_arr').hover(function () {
    //     swiper1.autoplay.stop();
    // }, function () {
    //     swiper1.autoplay.start()
    // })

    // ////////////////////////////////////////////////////////////////////////////////////////

    // var swiper2 = new Swiper(".mySwiper2", {
    //     slidesPerView: 3, 
    //     spaceBetween: 30,
     
    //     pagination: {
    //         el: ".swiper-pagination",
    //         clickable: true,
    //     },
       
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },
    //     autoplay: {
    //         delay: 400, 
    //     },
    //     speed: 1000,
    //     loop: true,
    //     direction: 'horizontal',
    //     effect: 'coverflow' 
    // });

    // $('#new_arr').hover(function () {
    //     swiper2.autoplay.stop();
    // }, function () {
    //     swiper2.autoplay.start()
    // })
    // ///////////////////////////////////////////////////////////////
    // var swiper3 = new Swiper(".mySwiper3", {
    //     slidesPerView: 3, 
    //     spaceBetween: 30,
     
    //     pagination: {
    //         el: ".swiper-pagination",
    //         clickable: true,
    //     },
     
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },
    //     autoplay: {
    //         delay: 400,
    //     },
    //     speed: 1000,
    //     loop: true,
    //     direction: 'horizontal',
    //     effect: 'coverflow' 
    // });

    // $('#new_arr').hover(function () {
    //     swiper3.autoplay.stop();
    // }, function () {
    //     swiper3.autoplay.start()
    // })
    // /////////////////////////////////////////////////////////////
    // var swiper4 = new Swiper(".mySwiper4", {
    //     slidesPerView: 3, 
    //     spaceBetween: 30,
      
    //     pagination: {
    //         el: ".swiper-pagination",
    //         clickable: true,
    //     },
      
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },
    //     autoplay: {
    //         delay: 400, 
    //     },
    //     speed: 1000,
    //     loop: true,
    //     direction: 'horizontal',
    //     effect: 'coverflow'
    // });

    // $('#new_arr').hover(function () {
    //     swiper4.autoplay.stop();
    // }, function () {
    //     swiper4.autoplay.start()
    // })
    // //////////////////////////////////////////////////////
    // var swiper5 = new Swiper(".mySwiper5", {
    //     slidesPerView: 3,
    //     spaceBetween: 30,
     
    //     pagination: {
    //         el: ".swiper-pagination",
    //         clickable: true,
    //     },
     
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },
    //     autoplay: {
    //         delay: 400, 
    //     },
    //     speed: 1000,
    //     loop: true,
    //     direction: 'horizontal',
    //     effect: 'coverflow' 
    // });

    // $('#new_arr').hover(function () {
    //     swiper5.autoplay.stop();
    // }, function () {
    //     swiper5.autoplay.start()
    // })
    // ////////////////////////////////////////
    // var swiper6 = new Swiper(".mySwiper6", {
    //     slidesPerView: 3,
    //     spaceBetween: 30,
    
    //     pagination: {
    //         el: ".swiper-pagination",
    //         clickable: true,
    //     },
       
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },
    //     autoplay: {
    //         delay: 400,
    //     },
    //     speed: 1000,
    //     loop: true,
    //     direction: 'horizontal', 
    //     effect: 'coverflow'
    // });

    // $('#new_arr').hover(function () {
    //     swiper6.autoplay.stop();
    // }, function () {
    //     swiper6.autoplay.start()
    // })
    // ////////////////////////////////////////
    // $('.main_nav_li').click(function () {
    //     console.log($(this).index())
    //     $('.mySwiper').removeClass('active')
    //     $('.mySwiper').eq($(this).index()).addClass('active')
    //     $('.active').not(this).addClass('display_none')
    // })
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