import { ANSWER } from './module';
import $ from 'jquery';
import './src/styles/main.less';
import './src/styles/banner.less';
import './src/styles/header.less';
import './src/styles/experience.less';
import './src/styles/experts.less';
import './src/styles/speakers.less';
import './src/styles/participation.less';
import './src/styles/footer.less';

import { MaskInput } from 'maska';
new MaskInput('[data-maska]');

$(function () {
  console.log('Готов!');

  // $('.speakers__info').html('Информация');

  $('.swiper').slick({
    centerMode: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: document.querySelector('.swiper__next'),
    prevArrow: document.querySelector('.swiper__prev'),

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
