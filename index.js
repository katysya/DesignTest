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
  /*Swiper*/
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

  // /*Клик на отправку формы*/
  // $('.submit').on('click', function () {
  //   console.log('Форма отправлена');
  //   $('#target').trigger('submit');
  // });

  // /*Событие отправки формы*/
  // $('#target').on('submit', function (event) {
  //   event.preventDefault();

  //   /* Axios Отправка запроса*/
  //   ///
  //   ///
  // });

  /*Validation*/
  $('form[id="form"]').validate({
    rules: {
      name: 'required',
      company: 'required',
      email: {
        required: true,
        email: true,
      },
      phone: {
        required: true,
        minlength: 16,
      },
    },
    messages: {
      name: 'Введите ваше имя',
      company: 'ВВедите название компании',
      email: 'Email введён некорректно',
      phone: 'Минимум 16 символов',
    },
    submitHandler: function (form) {
      ///Добавление отправки запроса
      form.submit();
    },
  });
});
