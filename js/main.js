$('.feature-carosel').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:3,
        },
        600:{
            items:3,
        },
        1000:{
            items:3,
        }
    }
});

$('.testimonials-carosel').owlCarousel({
    loop:true,
    margin:0,
    autoplay: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
});

$('.team-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
});