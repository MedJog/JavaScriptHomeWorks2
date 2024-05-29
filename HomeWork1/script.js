/*1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.*/
console.log('Задание 1.');
const superLink = document.getElementById('super_link');
console.log('Искомый элемент: ', superLink);

/*2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".*/
console.log('Задание 2.');
const cardLinks = document.querySelectorAll('.card-link');
// console.log(cardLinks);
for (let i = 0; i < cardLinks.length; i++) {
  cardLinks[i].textContent = 'ссылка';
}
console.log('Текст внутри элемента изменён.');

/*3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.*/
console.log('Задание 3.');
const cardBodyEl = document.querySelector('.card-body');
// console.log(cardBodyEl);
const cardLinkEls = cardBodyEl.querySelectorAll('.card-link');
console.log('Полученная коллекция: ',cardLinkEls);

/*4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.*/
console.log('Задание 4.');
const atrEl = document.querySelector('[data-number="50"]');
console.log('Полученный элемент: ', atrEl);

/*5. Выведите содержимое тега title в консоль.*/
console.log('Задание 5.');
console.log('Содержимое тега title: ', document.title);
/*6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.*/
console.log('Задание 6.');
const cardTitleEl = document.querySelector('.card-title');
console.log('Элемент: ', cardTitleEl);
const cardTitleElParent = cardTitleEl.parentNode;
console.log('Родительский узел: ', cardTitleElParent);

/*7. Создайте тег`p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".*/
console.log('Задание 7.');
const paragraphEl = document.createElement('p');
paragraphEl.textContent = 'Привет!';
const cardEl = document.querySelector('.card');
// console.log(cardEl);
const firstEl = cardEl.firstElementChild;
// console.log(firstEl);
cardEl.insertBefore(paragraphEl,firstEl);
console.log(paragraphEl.innerText);

/*8. Удалите тег h6 на странице.*/
console.log('Задание 8.');
const headingH6 = document.querySelector('h6');
console.log(headingH6.innerText, 'удалён.');
headingH6.remove();