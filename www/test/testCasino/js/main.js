document.addEventListener('DOMContentLoaded', function() {
  
  let spin = document.querySelector('.hero__wheel-outside');
    spin.addEventListener('click', function () {
    document.querySelector('.hero__wheel-center').classList.add('rotate');
    document.querySelector('.counter').innerHTML = '1';
    setTimeout(function() {
    document.querySelector('.modal__dialog').classList.add('modal__dialog--visible')}, 1500);

  });

  let spinTwo = document.querySelector('.modal__spin');
    spinTwo.addEventListener('click', function () {
    document.querySelector('.modal__dialog').classList.remove('modal__dialog--visible');
    document.querySelector('.hero__wheel-center').classList.remove('rotate');
    document.querySelector('.hero__wheel-center').classList.add('rotate-two');
    document.querySelector('.counter').innerHTML = '0';
    setTimeout(function() {
      document.querySelector('.modal-two__overlay').classList.add('modal-two__overlay--visible');
      document.querySelector('.modal-two__dialog').classList.add('modal-two__dialog--visible');
  }, 1500);
  });
  
  let modalClose = document.querySelector('.modal__close');
    modalClose.addEventListener ('click', function(){
      // document.querySelector('.modal-two__overlay').classList.remove('modal-two__overlay--visible');
      // document.querySelector('.modal-two__dialog').classList.remove('modal-two__dialog--visible');
      location.reload(); 
    }); 

});









