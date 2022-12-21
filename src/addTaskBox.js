export default function addTaskBox() {
  // The Box of adding tasks to the tasks container
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

const tasksContainer = document.getElementById('tasksContainer');
let taskStorageItems = [];

if (localStorage.getItem('tasks')) {
  addLocalStorageTasks();
}

function addNewTask(e) {
  e.preventDefault();

  const newTask = taskTemplateGenerator(input.value);

  tasksContainer.appendChild(newTask);

  taskStorageItems.push(input.value);
  localStorage.setItem('tasks', JSON.stringify(taskStorageItems));
  console.log(JSON.parse(localStorage.getItem('tasks')));

  if (input.value == '') {
    alert('Add Something');
    tasksContainer.removeChild(newTask);
    localStorage.setItem('tasks', JSON.stringify(removeLocalStorageTask('')));
    taskStorageItems = JSON.parse(localStorage.getItem('tasks'));
  }

  input.value = '';
}

function taskTemplateGenerator(name) {
  const taskBox = document.createElement('div');
  taskBox.classList.add('task');

  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.name = 'name';
  checkBox.value = 'value';
  checkBox.id = 'id';

  const taskName = document.createElement('p');
  taskName.textContent = name;

  const remove = document.createElement('button');
  remove.textContent = '🗑️';
  remove.setAttribute('id', `task-${name}`); // To Access it in removeTask()
  taskBox.setAttribute('id', `task-${name}`); // To Access it in removeTask()

  taskBox.appendChild(checkBox);
  taskBox.appendChild(taskName);
  taskBox.appendChild(remove);

  remove.addEventListener('click', removeTask); // addEventListner To this new task

  return taskBox;
}

function removeTask(e) {
  const taskID = e.target.id;
  const task = document.querySelector(`#${taskID}`);
  tasksContainer.removeChild(task);
  localStorage.setItem('tasks', JSON.stringify(removeLocalStorageTask(taskID)));
  taskStorageItems = JSON.parse(localStorage.getItem('tasks'));
  console.log(localStorage.getItem('tasks'));
}

function addLocalStorageTasks() {
  // Adds localStorage tasks to tasksContainer
  const localStorageArr = JSON.parse(localStorage.getItem('tasks'));
  for (let i = 0; i < localStorageArr.length; i++) {
    tasksContainer.appendChild(taskTemplateGenerator(`${localStorageArr[i]}`));
  }
}

function removeLocalStorageTask(taskID) {
  // remove tasks from localStorage 'tasks' array
  return taskStorageItems.filter((e) => e != taskID);
}
