/*Задание 1
1. Поиск в интернете (бесплатные api примеры).
2. Найти любые данные, на произвольную тему.
3. Создать файл data.js.
4. Создать переменную которая будет хранить данные из публичных api.*/
/*Задание 2
1. Создать файл index.html.
2. Подключить data.js.
3. Сформировать контент из данных (картинка загловок и параграф).
4. Добавить данный контент в вёрстку.
5. * Добавить стили при необходимости (по желанию).*/
const parseData = JSON.parse(data);
console.log(parseData);
const divEl = document.querySelector('.content');
parseData.forEach(item => {
  divEl.insertAdjacentHTML('beforeend', `
  <div class="content-item">
  <img class="image" src="${item.avatar}" alt="photo">
  <h2 class="title">${item.name}</h2>
  <span class="email">${item.email}</span>
  <p class="text">${item.body}</p>
  </div>
  `) 
});
