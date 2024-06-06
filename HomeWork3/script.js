/* 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером. */
document.addEventListener('DOMContentLoaded', () => {
  console.log('Все теги прогрузились.');
});
/* 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены. */
window.addEventListener('load', () => {
console.log('Страница загрузилась.');
});
/* 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
- Класс "super_element" присутствует в элементе "div".
- сообщение должно определять присутствует или отсутствует класс "super_element"
- у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
- которому был совершен клик.
- Необходимо использовать делегирование. */
const bodyEl = document.querySelector('body');
bodyEl.addEventListener('click', (e) => {
  if (e.target.classList.contains('super_element')) {
    let tagNameEl = e.target.tagName.toLowerCase();
    console.log(`Класс "super_element" присутствует в элементе "${tagNameEl}".`);
  } else {
    let tagNameEl = e.target.tagName.toLowerCase();
    console.log(`Класс "super_element" oтсутствует в элементе "${tagNameEl}".`);
  }
});
/*4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea." */
const textAreaEl = document.querySelector('textarea');
textAreaEl.addEventListener('mouseover', () => {
console.log('Вы навели на textarea.');
});
/*5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.*/
const ulElement = document.querySelector('ul');
const liElements = ulElement.children;
ulElement.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') console.log(e.target.textContent);
});
/*6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.*/
/* Ответ на вопрос: Отметила определённую закономерность - быстрее приходит ответ от обработчика событий, который находится ближе по DOM - дереву к списку ul. Для эксперимента создала ещё один родительский элемент для списка ul - div с классом block, к нему добавила обработчик событий. При клике первый ответ приходит от кода в задании 5, потом от кода в 6, а потом от кода в задании 3. Думаю, что чем ближе к ul обработчик, тем короче фаза всплытия, и ответ приходит быстрее.
Ну, или просто обработка события и ответ в таком случае занимают меньше времени. */

// const blockEl = document.querySelector('.block');
// blockEl.addEventListener('click', (e) => {
//   if (e.target.tagName === 'BUTTON') console.log(`Нажата кнопка ${e.target.textContent}`);
// });

/* 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.*/
for (let i = 0; i < liElements.length; i++) {
  if (i % 2 === 0) {
    liElements[i].style.backgroundColor = 'green';
  }
}
