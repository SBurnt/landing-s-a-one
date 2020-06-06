import $ from 'jquery';

// Browser compatibility ie11 (forEach)
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    // eslint-disable-next-line no-param-reassign
    thisArg = thisArg || window;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

const quiz = document.querySelector('.quiz');
const btnStartQuiz = document.querySelectorAll('.js-start-quiz-toggle');
const body = document.querySelector('body');

// ---------- show quiz start ----------
btnStartQuiz.forEach((items) => {
  items.addEventListener('click', () => {
    quiz.classList.toggle('active');
    body.classList.toggle('overflow-hidden');
  });
});
// ---------- show quiz end ----------

// ---------- next and previous questions START ----------
function compileForm() {
  const regionName = $('.answer__form select[name="region-q"] option:selected');
  $('.form__send input[name="region"]').val(regionName.text());

  const cityName = $('.answer__form input[name="city-q"]');
  $('.form__send input[name="city"]').val(cityName.val());

  const nameName = $('.answer__form input[name="name-q"]');
  $('.form__send input[name="name"]').val(nameName.val());

  const amountName = $('.answer__form input[name="amount-q"]');
  $('.form__send input[name="amount"]').val(amountName.val());

  const birthdayName = $('.answer__form input[name="birthday-q"]');
  $('.form__send input[name="birthday"]').val(birthdayName.val());

  const genderName = $('.answer__form input[name="gender-q"]:checked');
  $('.form__send input[name="gender"]').val(genderName.val());
}

let question = 0;

$('.btn__next').click(function () {
  function nextQuiz() {
    $('.quiz__change.active').removeClass('active');
    $('.quiz__change')
      .eq(++question)
      .addClass('active');

    if (question == $('.quiz__change').length - 1) {
      $('.btn__next').css('display', 'none');
      $('.btn__send').css('display', 'block');
      compileForm();
    }

    if (question > 0) {
      $('.btn__prev').css('display', 'block');
      $('.quiz__bottom').css('justify-content', 'space-between');
    }
  }

  const answer1 = $('.quiz__change.active input[name="amount-q"]').val();
  const answer3 = $('.quiz__change.active input[name="city-q"]').val();
  const answer5 = $('.quiz__change.active input[name="name-q"]').val();
  const answer6 = $('.quiz__change.active input[name="birthday-q"]').val();

  if (answer1 === '') {
    console.log('not f1');
    $('.quiz__change.active input[name="amount-q"]').css('border', '1px solid red');
  } else if (answer3 === '') {
    $('.quiz__change.active input').css('border', '1px solid red');
    console.log('not f3');
  } else if (answer5 === '') {
    $('.quiz__change.active input').css('border', '1px solid red');
    console.log('not f5');
  } else if (answer6 === '') {
    $('.quiz__change.active input').css('border', '1px solid red');
    console.log('not f6');
  } else {
    $('.quiz__change.active input').css('border', 'none');
    $('.quiz__change.active input').css('border-bottom', '2px solid rgba(40, 40, 40, 0.2)');
    nextQuiz();
  }
});

$('.btn__prev').click(function () {
  $('.quiz__change.active').removeClass('active');
  $('.quiz__change')
    .eq(--question)
    .addClass('active');

  if (question < $('.quiz__change').length - 1) {
    $('.btn__next').css('display', 'block');
    $('.btn__send').css('display', 'none');
  }

  if (question <= 0) {
    $('.btn__prev').css('display', 'none');
    $('.quiz__bottom').css('justify-content', 'flex-end');
  }
});

// ---------- next and previous questions END ----------

// ---------- submitting the form to the server START ----------
$('.btn__send').on('click', function () {
  console.log('отправка формы');

  let error = 0;
  const answer7 = $('.quiz__change.active input[name="phone"]').val();
  console.log('answer7 ', answer7);

  if (answer7 === '') {
    error++;
    $('.quiz__change.active input[name="phone"]').css('border', '1px solid red');
  } else {
    $('.quiz__change.active input').css('border', 'none');
    $('.quiz__change.active input').css('border-bottom', '2px solid rgba(40, 40, 40, 0.2)');
  }

  if (error > 0) {
    return false;
  }

  $('.btn__send').prop('disabled', true);

  const formFooter = document.querySelector('.form__send');
  let formData = new FormData(formFooter);

  const xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      alert('Крутяк данные ушли');
    }
  };
  xmlHttp.open('POST', './send/send-base.php');
  xmlHttp.send(formData);
});
// ---------- submitting the form to the server END ----------