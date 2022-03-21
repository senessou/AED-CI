$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout: 2000,
    stagePadding: 1,
    responsive:{
        576:{
            items:1
        },
        768:{
            items:3
        },
        1024:{
            items:8
        }
    }
})