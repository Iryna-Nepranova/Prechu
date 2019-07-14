$(document).ready(function(){

    $('.nav-toggle').on('click', function(e){
      e.preventDefault();
      $('.nav-mobile ul').toggleClass('is-open')
    })


var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  
$('.my-class').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });

})

$(document).ready(function(){
  $('.slider').bxSlider();

});