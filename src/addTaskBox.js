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
  input.addEventListener('keypress', (e) => {
    // To make task added by Enter Key
    if (e.key === 'Enter') {
      addNewTask(e);
    }
  });

  return { addTaskBox, input, button };
}

export const tasksContainer = document.createElement('div');
tasksContainer.setAttribute('id', 'tasksContainer');

function addNewTask(e) {
  console.log(e.key);
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

  const remove = document.createElement('button');
  remove.textContent = '🗑️';
  remove.setAttribute('id', input.value); // To Access it in removeTask()
  taskBox.setAttribute('id', input.value); // To Access it in removeTask()

  taskBox.appendChild(checkBox);
  taskBox.appendChild(taskName);
  taskBox.appendChild(remove);

  tasksContainer.appendChild(taskBox);

  if (input.value == '') {
    alert('Add Something');
    tasksContainer.removeChild(taskBox);
  }

  input.value = '';

  document.body.appendChild(tasksContainer);

  remove.addEventListener('click', removeTask);
}

function removeTask(e) {
  const taskID = e.target.id;
  const task = document.querySelector(`#${taskID}`);
  tasksContainer.removeChild(task);
}
