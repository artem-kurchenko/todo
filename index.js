const tasks = [
  'Сделать проектную работу',
  'Полить цветы',
  `<img src="somelink" onerror="alert('вас взломали')" />`,
  'Пройти туториал по Реакту',
  'Сделать фронт для своего проекта',
  'Погулять с собакой',
  'Разобраться в замыканиях',
  'Решить задачу на Codewars',
];

const todosListElement = document.querySelector('.todos__list');
const todosFormElement = document.querySelector('.todos__form');
const todosTemplateElement = document.querySelector('.todo-template');
const todosInputElement = document.querySelector('.todos__input');

function renderList(data){
     data.forEach(item=>renderItem(item))
}
function renderItem(text){
   const templateElement = document.querySelector(".todo-template").content;
   const listElement = templateElement.cloneNode(true);
   const textElement = listElement.querySelector(".todo__text");
   textElement.textContent = text;
   todosListElement.append(listElement);

}
renderList(tasks);

