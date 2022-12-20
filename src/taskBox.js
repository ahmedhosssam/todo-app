export default function taskBox() {
  const taskBox = document.createElement('div');
  taskBox.classList.add('task');

  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.name = 'name';
  checkBox.value = 'value';
  checkBox.id = 'id';

  return taskBox;
}
