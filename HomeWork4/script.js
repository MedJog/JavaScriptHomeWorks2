/* 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться. */
const inputEl = document.querySelector('#from');
const spanEl = document.querySelector('span');
inputEl.addEventListener('input', () => {
  spanEl.textContent  = inputEl.value;
});
/* 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
- добавить два класса: animate_animated и animate_fadeInLeftBig
- поставить данному элементу стиль visibility в значение 'visible'. */
const buttonEl = document.querySelector('.messageBtn');
const messageEl = document.querySelector('.message');
buttonEl.addEventListener('click', () => {
  messageEl.className += ' animate_animated';
  messageEl.className += ' animate_fadeInLeftBig';
  messageEl.style.visibility = 'visible';
});

/* 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
- Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
- Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать. */
const form = document.querySelector('form');
const inputs = form.querySelectorAll('.form-control');
const buttons = document.querySelectorAll('button');
const buttonSend = buttons[1];
function validateForm () {
  let formValid = true;
  inputs.forEach(input => {
    if (input.value.trim() === '') {
      input.classList.add('error');
      formValid = false;
    } else {
      input.classList.remove('error');
    }
  });
  return formValid;
}

buttonSend.addEventListener('click', (event) => {
  event.preventDefault();
  if (!validateForm()) {
    console.log(validateForm());
    document.body.insertAdjacentHTML('beforeEnd', `<p class="message-error">Заполните все поля</p>`);
  } else {
    form.submit();
  }
});




