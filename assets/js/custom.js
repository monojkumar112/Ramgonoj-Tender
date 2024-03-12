document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      slidesPerView: 2,
      spaceBetween: 30,
      loop: true,
      // If you have navigation buttons
      navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
      },

      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 40
        }
      }
    });
  });