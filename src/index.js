import hero1 from './hero1.jpg';
import './style.css';

const contentDiv = document.querySelector('#content');
const nav = document.querySelector('#nav');
const navButtons = document.querySelectorAll('.btn-nav')

nav.classList.add('nav')
navButtons.forEach(button => {
  button.classList.add('btn-nav')
});

function component() {
  const mainDiv = document.createElement('div');
  const restHeader = document.createElement('h1');
  const restTagline = document.createElement('h2');

  mainDiv.classList.add('hero');

  restHeader.innerText = "Perk"
  restTagline.innerText = "Sip, Snack, Socialize";
  
  restHeader.classList.add('title');
  restTagline.classList.add('tagline');

  mainDiv.appendChild(restHeader);
  mainDiv.appendChild(restTagline);

  const restHero = new Image();
  restHero.src = hero1;

  mainDiv.appendChild(restHero);

  return mainDiv;
}

contentDiv.classList.add('container');
contentDiv.appendChild(component());