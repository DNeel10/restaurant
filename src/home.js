import hero1 from './hero1.jpg';


function home() {

  const heroDiv = document.createElement('div');
  const restHeader = document.createElement('h1');
  const restTagline = document.createElement('h2');

  heroDiv.classList.add('hero');

  restHeader.innerText = "Perk"
  restTagline.innerText = "Sip, Snack, Socialize";

  restTagline.classList.add('tagline');
  restHeader.classList.add('title');


  heroDiv.appendChild(restHeader);
  heroDiv.appendChild(restTagline);

  const restHero = new Image();
  restHero.src = hero1;

  heroDiv.appendChild(restHero);

  return heroDiv;
}

export default home;