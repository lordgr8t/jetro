$(function () {
  $('.slider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    infinite: true,
    fade: true,
    asNavFor: '.slider__images-small',
  });

  $('.slider__images-small').slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    focusOnSelect: true,
    asNavFor: '.slider__inner',
    infinite: false,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 941,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          variableWidth: false,
        }
      },
      {
        breakpoint: 753,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          variableWidth: false,
        }
      },
      {
        breakpoint: 606,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          variableWidth: false,
        }
      },
      {
        breakpoint: 457,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          variableWidth: false,
        }
      },
    ]
  });

  $('.header__menu-btn').on('click', function () {
    $('.header__menu ul').slideToggle();
  });
});