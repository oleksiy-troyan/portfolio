$(document).ready(function () {
  
  var menuButton = document.querySelector('.navbar-top__mobile');
  menuButton.addEventListener('click', function () {
    document.querySelector('.navbar-menu').classList.toggle('navbar__mobile');

  });
  var menuButton = document.querySelector('.navbar__mobile-close');
  menuButton.addEventListener('click', function () {
    document.querySelector('.navbar-menu').classList.toggle('navbar__mobile');

  });

  var tabs = $('.trending__tab');
  var card = $('.trending__cards');

  tabs.on('click', function (event) {
    var activ = $(this).attr('data-target');
    tabs.removeClass('trending__tab-activ');
    card.removeClass('trending__card-activ');
    $(activ).addClass('trending__card-activ');
    $(this).addClass('trending__tab-activ');
  });


  var mySwiper = new Swiper('.swiper__container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
    autoplay: {
      delay: 7000,
    },

  });

  $('.swiper__container').mouseover(function () {
    mySwiper.autoplay.stop();
  });
  $('.swiper__container').mouseout(function () {
    mySwiper.autoplay.start();
  });


  var mySwiper = new Swiper('.story-slider', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.story__button-next',
      prevEl: '.story__button-prev',
    },
    slidesPerView: 2,
    slidesPerGroup:2,
    spaceBetween: 10,

    breakpoints: {
      706: {
        direction: 'horizontal',
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    }

  });

  var menuButton = document.querySelector('.story__button-prev');
  menuButton.addEventListener('click', function () {
    document.querySelector('.story__button-prev').classList.add('activ');
    document.querySelector('.story__button-next').classList.remove('activ');
    
  });
  var menuButton = document.querySelector('.story__button-next');
  menuButton.addEventListener('click', function () {
    document.querySelector('.story__button-next').classList.add('activ');
    document.querySelector('.story__button-prev').classList.remove('activ');
  });

  // if (document.body.clientWidth < 705) {
    
  //   var mySwiper = new Swiper('.story-slider', {
  //     // Optional parameters
  //     direction: 'vertical',
  //     loop: true,

  //     // Navigation arrows
  //     navigation: {
  //       nextEl: '.story__button-next',
  //       prevEl: '.story__button-prev',
  //     },
  //     slidesPerView: 2,
  //     slidesPerGroup: 1,

  //   });
    
  // }



  $('.form').validate({
    errorClass: "invalid",
    messages: {
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must name@domain.com"
      },
      
    },
  });
  
    

});
