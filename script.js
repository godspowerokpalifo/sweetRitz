let menu= document.querySelector('#menubars');
let navbar= document.querySelector('.navbar');
let openShopping=document.querySelector('.shopping')
let closeShopping=document.querySelector('.closeShopping');
let body= document.querySelector('body');
let total=document.querySelector('.total');
let quantity=document.querySelector('.quantity');



menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

document.querySelector('#search-icon').onclick = () => {
  document.querySelector('#searchform').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
  document.querySelector('#searchform').classList.remove('active');
}

// for swiping 
var swiper = new Swiper(".reviewslider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});



