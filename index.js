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
const todosFormButtonElement = todosFormElement.querySelector(".todos__submit-btn");
let editItem = null;

function renderList(data) {
  data.forEach(item => renderItem(item))
}

function copyListItem(event) {
  let buttonElement = event.target;
  let listItemElement = buttonElement.closest(".todo");
  if (!listItemElement) {
    alert("no item found");
    return;
  }
  listItemElement = listItemElement.cloneNode(true);
  todosListElement.append(listItemElement);
}

function removeListItem(event) {
  let buttonElement = event.target;
  let listItemElement = buttonElement.closest(".todo");
  listItemElement.remove();
}

function editListItem(event, containerSelector, textSelector) {
  let buttonElement = event.target;
  let listItemElement = buttonElement.closest(containerSelector);
  let editItemTextElement = listItemElement.querySelector(textSelector);
  editItem = editItemTextElement;
  todosInputElement.value = editItemTextElement.textContent;
  todosFormButtonElement.textContent = "Сохранить";
}

function renderItem(text) {
  const listElement = cloneTemplate(document.querySelector(".todo-template"));
  const textElement = listElement.querySelector(".todo__text");
  textElement.textContent = text;
  addEventListeners(listElement);
  todosListElement.append(listElement);

}
function cloneTemplate(container) {
  const templateElement = container.content;
  const newElement = templateElement.cloneNode(true);
  return newElement;
}
function addEventListeners(listElement) {
  let copyButtonElement = listElement.querySelector(".todo__btn_type_copy");
  copyButtonElement.addEventListener("click", copyListItem);
  let removeButtonElement = listElement.querySelector(".todo__btn_type_remove");
  removeButtonElement.addEventListener("click", removeListItem);
  let editButtonElement = listElement.querySelector(".todo__btn_type_edit");
  editButtonElement.addEventListener("click", (event) => editListItem(event, ".todo", '.todo__text'))
}

function addItem(e) {
  e.preventDefault();
  let value = todosInputElement.value;
  if (value && value.trim(" ") === "") {
    alert('wrong or empty input');
    return;
  }
  if (!editItem)
    renderItem(value);
  else {
    editItem.textContent = todosInputElement.value;
    todosFormButtonElement.textContent = "Добавить";
    editItem = null;
  }
  todosInputElement.value = null;
}
renderList(tasks);

todosFormElement.addEventListener("submit", addItem)
