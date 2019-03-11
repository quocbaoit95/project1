$(document).ready(function(){
  $("#thump_slider .owl-carousel").owlCarousel({
  	loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
  });
  $(".slider_product .owl-carousel").owlCarousel({
    loop:true,
    margin:24,
    nav:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
  }); 
  $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#back-top').stop().fadeIn(100);
        } else {
            $('#back-top').stop().fadeOut(100);
        }
    });
    $('#back-top').click(function(){
        $("html, body").animate({scrollTop: 0}, 800);
    }); 
    $('.search').click(function(){
        $('#main-menu li input').stop().fadeToggle();

    });
    $(window).resize(function(){
        
    });
});