$(document).ready(function () {

  function init() {
    var imgDefer = document.getElementsByTagName('img');
    for (var i = 0; i < imgDefer.length; i++) {
      if (imgDefer[i].getAttribute('data-src')) {
        imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
      }
    }
  }
  window.onload = init;

  var hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    effect: "coverflow",
    autoplay: {
      delay: 7000,
    },
  });
  var reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });

  var menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', function () {
    document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom_visible');
    document.querySelector('body').classList.toggle('navbar-bottom_visible');
  });

  var modalButton = $('[data-toggle=modal]');

  modalButton.on('click', openModal);
  
  function openModal() {
    var targetModal = $(this).attr('data-href');
    $(targetModal).find('.modal__overlay').addClass('modal__overlay--visible');
    $(targetModal).find('.modal__dialog').addClass('modal__dialog--visible');
    $('body').css('overflow-y', 'hidden');
  }
  
  var closeModalButton = $('.modal__close');

  closeModalButton.on('click', closeModal);

  $(document).keyup(function (e) {
    if (e.keyCode === 27) {
      $('body').css('overflow-y', '');  
      closeModal();
    }
  });
  
  $('.modal__overlay').on('click', closeModal);

  function closeModal(event) {
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
    event.preventDefault();
    $('.form').find('input').val('');
    $('.message').val('');
    $('body').css('overflow-y', '');
  }

  $('.form').each(function() {

    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Name must be 2 characters long",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must name@domain.com"
        },
        phone: {
          required: "Write your phone number",
          minlength: "Phone must more characters long",
        },
      },
    });
  });

  $('.form').find('input').val('');
  $('.message').val('');
  
  $(document).ready(function () {
    
    $('.phone_with_ddd').mask('+7(000) 000-00-00');
  }); 
  

  AOS.init();

  $('.map').mouseover(function () {
    var map = $('.map-none');
    map.removeClass('map-none');
  });

});


