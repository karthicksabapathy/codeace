/* ===== HEADER SCROLL ===== */
$(window).scroll(function() {
   if ($(window).scrollTop() >0) { $('body').addClass('headerscroll'); }
   else { $('body').removeClass('headerscroll'); }
});

/* ===== SIDEBAR COLLAPSE FOR MOBILE ===== */
$("[data-trigger]").on("click", function(e){
    e.preventDefault();
    e.stopPropagation();
    var offcanvas_id =  $(this).attr('data-trigger');
    $(offcanvas_id).toggleClass("show");
    $('body').toggleClass("offcanvas-active");
    $(".screen-overlay").toggleClass("show");
}); 
$(".btn-close-mob, .screen-overlay").click(function(e){
    $(".screen-overlay").removeClass("show");
    $(".mobile-offcanvas").removeClass("show");
    $("body").removeClass("offcanvas-active");
});  

/* ===== TESTIMONIAL SLIDER ===== */
$(document).ready(function(){
    $('.testi-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        /*fade: true,
        cssEase: 'linear'*/
    });
});
