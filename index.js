const tasks = [
  'Сделать проектную работу',
  'Полить цветы',
  // `<img src="somelink" onerror="alert('вас взломали')" />`,
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
    let template = `<li class="todo">
    <p class="todo__text">
      ${text}
    </p>
    <button class="button todo__btn todo__btn_type_edit">

    </button>
    <button class="todo__btn button todo__btn_type_copy">

    </button>
    <button class="todo__btn button todo__btn_type_remove">

    </button>
  </li>`
  todosListElement.insertAdjacentHTML('beforeend', template);
}
renderList(tasks);

