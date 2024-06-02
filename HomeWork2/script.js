/*1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.*/
console.log('Задание 1');
const items = document.querySelectorAll('.dropdown-item');
items.forEach(item => {
  item.classList.add('super-dropdown');
});
console.log(items);

/*2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.*/
console.log('Задание 2');
const buttonEl = document.querySelector('.btn');
let classes = buttonEl.getAttribute('class').split(' ');
classes.forEach(element => {
classes.includes('btn-secondary') ? buttonEl.classList.remove('btn-secondary') : buttonEl.classList.add('btn-secondary') 
});
console.log(buttonEl);
// classes.forEach(element => {
//   if (classes.includes('btn-secondary')) {
//     buttonEl.classList.remove('btn-secondary');
//   } else {
//     buttonEl.classList.add('btn-secondary');
//   }
// });
// console.log(buttonEl);

/*3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".*/
console.log('Задание 3');
const menuEl = document.querySelector('.menu');
menuEl.classList.remove('dropdown-menu');
console.log(menuEl);

/*4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
`<a href="#">link</a>` */
console.log('Задание 4');
const divEl = document.querySelector('.dropdown');
console.log(divEl);
divEl.insertAdjacentHTML('afterend', '<a href="#">link</a>');

/* 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown". */
console.log('Задание 5');
const idEl = document.querySelector('#dropdownMenuButton');
idEl.id = 'superDropdown';
console.log(idEl);
// document.querySelector('#dropdownMenuButton').id = 'superDropdown';

/* 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset. */
console.log('Задание 6');
const atrEl = document.querySelector('[aria-labelledby="dropdownMenuButton"]');
atrEl.dataset.dd = 3;
console.log(atrEl);

/* 7. Удалите атрибут type у элемента с классом "dropdown-toggle". */
console.log('Задание 7');
const typeEl = document.querySelector('.dropdown-toggle');
typeEl.removeAttribute('type');
console.log(typeEl);