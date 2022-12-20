export default function addTaskBox() {
  const addTaskBox = document.createElement('div');
  addTaskBox.setAttribute('id', 'taskBox');

  const input = document.createElement('input');
  input.setAttribute('id', 'input');
  input.setAttribute('placeholder', 'Add New Task');
  addTaskBox.appendChild(input);

  const button = document.createElement('button');
  button.textContent = '➤';
  button.type = 'submit';
  addTaskBox.appendChild(button);

  button.addEventListener('click', addNewTask);

  return { addTaskBox, input, button };
}

export const tasksContainer = document.createElement('div');
tasksContainer.setAttribute('id', 'tasksContainer');

function addNewTask(e) {
  e.preventDefault();

  const taskBox = document.createElement('div');
  taskBox.classList.add('task');

  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.name = 'name';
  checkBox.value = 'value';
  checkBox.id = 'id';

  const taskName = document.createElement('p');
  taskName.textContent = input.value;

  input.value = '';

  const remove = document.createElement('button');
  remove.textContent = '🗑️';

  taskBox.appendChild(checkBox);
  taskBox.appendChild(taskName);
  taskBox.appendChild(remove);

  tasksContainer.appendChild(taskBox);
  document.body.appendChild(tasksContainer);
}
