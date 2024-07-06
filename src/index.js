import './style.css';
import displayMenu from './menu.js';
import home from './home.js';
import about from './about.js';

const contentDiv = document.querySelector('#content');
contentDiv.classList.add('container');

const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const aboutButton = document.querySelector('#about');

homeButton.addEventListener('click', (e) => {
  e.preventDefault();
  contentDiv.innerHTML = '';
  contentDiv.appendChild(home());
});

menuButton.addEventListener('click', (e) => {
  e.preventDefault();
  contentDiv.innerHTML = '';

  contentDiv.appendChild(displayMenu());
});

aboutButton.addEventListener('click', (e) => {
  e.preventDefault();
  contentDiv.innerHTML = '';

  contentDiv.appendChild(about());
});

contentDiv.appendChild(home());

