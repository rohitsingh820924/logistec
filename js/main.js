var clientSlider = new Swiper(".clientSlider", {
    slidesPerView: 1,
    spaceBetween: 100,
    autoplay: { delay: 2500, disableOnInteraction: false },
    loop: true,
    breakpoints: {
        0: { slidesPerView: 1,
            spaceBetween: 0,
         },
        768: { slidesPerView: 2,
            spaceBetween: 50,
         },
        1024: { slidesPerView: 3,
            spaceBetween: 100,
         },
    },
});

var portfolioSlider = new Swiper(".portfolioSlider", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: { delay: 2500, disableOnInteraction: false },
    loop: true,
    navigation: {
        nextEl: '.swiper-portfolioSlider-next',
        prevEl: '.swiper-portfolioSlider-prev'
    },
    breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 3 },
    },
});

var testimonialSlider = new Swiper(".testimonialSlider", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: { delay: 2500, disableOnInteraction: false },
    loop: true,
    breakpoints: {
        0: { slidesPerView: 1 },
        992: { slidesPerView: 2 },
        1200: { slidesPerView: 3 },
    },
});

// Header Scroll
$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('header').addClass('logistec-scrolled');
    } else {
       $('header').removeClass('logistec-scrolled');
    }
});

$(document).ready(function(){
    // Mobile Menu
    $('#memuBtn').click(function(e){
        e.stopPropagation();
        $('header').toggleClass('open')
    })

    $('body,html').click(function(){
        $('header').removeClass('open')
    })

    // Menu Links
    $('.logistec-nav .logistec-nav-link').click(function(){
        $('.logistec-nav .logistec-nav-link').removeClass('active');
        $(this).addClass('active');
    })
})
