export default function addTaskBox() {
  const taskBox = document.createElement('div');
  taskBox.setAttribute('id', 'taskBox');

  const input = document.createElement('input');
  input.setAttribute('id', 'input');
  input.setAttribute('placeholder', 'ex: Go to Gym');
  taskBox.appendChild(input);

  const button = document.createElement('button');
  button.textContent = '➤';
  taskBox.appendChild(button);

  return taskBox;
}
