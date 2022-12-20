import css from './style.css';
import header from './header.js';
import addTaskBox from './addTaskBox.js';
import taskBox from './taskBox';

document.body.appendChild(header());

const content = document.createElement('div');
content.setAttribute('id', 'content');

content.appendChild(addTaskBox());
document.body.appendChild(content);
