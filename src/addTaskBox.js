export default function addTaskBox() {
  const addTaskBox = document.createElement('div');
  addTaskBox.setAttribute('id', 'taskBox');

  const input = document.createElement('input');
  input.setAttribute('id', 'input');
  input.setAttribute('placeholder', 'ex: Go to Gym');
  addTaskBox.appendChild(input);

  const button = document.createElement('button');
  button.textContent = '➤';
  addTaskBox.appendChild(button);

  return addTaskBox;
}
