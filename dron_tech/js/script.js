// document.addEventListener('click', function (e){
//     const targetElement = e.target;
//     if (targetElement.closest('.menu-icon')){
//         document.documentElement.classList.toggle('menu-open');
//     }
// });

// $(document).ready(function(){
//   $('.cards-brands').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     arrows: false,  
//     dots: true      
//   });
// });
$(".accordion__title").on("click", function(e) {

  e.preventDefault();
  var $this = $(this);

  if (!$this.hasClass("accordion-active")) {
      $(".accordion__content").slideUp(400);
      $(".accordion__title").removeClass("accordion-active");
      $('.accordion__arrow').removeClass('accordion__rotate');
  }

  $this.toggleClass("accordion-active");
  $this.next().slideToggle();
  $('.accordion__arrow',this).toggleClass('accordion__rotate');
});


new Swiper('.image-slider',{
  // стрілки
  // navigation:{
  //     nextE1: '.swiper-button-next',
  //     prevE1: '.swiper-button-prev'
  // },

// навігація
  pagination:{
      el: '.swiper-pagination',
// булети
  clickable: true,
  dynamicBullets: true,    
  },
  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  grabCursor: true,
  slideToClickedSlide: true,
  // хеш навігація
  hashNavigation:{
      watchState: true,
  },
  // керування клавіатурою
  keyboard:{
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
  },
  // керування колесом миші
  mousewheel:{
      sensitivity: 1,
      eventsTarget: ".image-slider"
  },
  // автовисота
  autoHeight: true,
  // кількість слайдів для показу
  slidesPerView: 2,

  // відключення функціоналу якщо слайдів менше, ніж потрібно
  watchOverflow: true,

  // відступ між слайдами
  spaceBetween: 41,
  // кількість слайдів, що перегортаються
  slidesPerGroup: 1,

  // активний слайд по центру
  centerSlides: true,

  // стартовий слайд
  initialSlide: 0,

  // нескінченний слайдер
  loop: true,

  // кількість дублюючих слайдів
  loopedSlides: 3,

  // вільний режим
  freeMode: true,

  // автопрокрутка
  autoplay:{
      delay: 1000,
      stopOnLastSlide: true,
      disableOnInteraction: false,
  },
  speed: 800,

  // Вертикальний слайдер
  // direction: 'vertical',
  direction: 'horizontal',
  breakpoints:{
    320:{
        slidesPerView: 1,
        spaceBetween: 10,
    },
    480:{
        slidesPerView: 2,
    },
    992:{
        slidesPerView: 3,
    }
},


})