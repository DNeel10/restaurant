
function about() {
  const aboutDiv = document.createElement('div');
  const hoursDiv = document.createElement('div');
  const phoneDiv = document.createElement('div');
  const locDiv = document.createElement('div');

  const hoursTitle = document.createElement('h3')
  const phoneTitle = document.createElement('h3') 
  const locTitle = document.createElement('h3')

  const hours = document.createElement('p');
  const phone = document.createElement('p');
  const loc= document.createElement('p');

  hoursTitle.innerText = 'Hours';
  phoneTitle.innerText = 'Phone'
  locTitle.innerText = 'Address'

  hoursTitle.classList.add('about__title');
  phoneTitle.classList.add('about__title');
  locTitle.classList.add('about__title');

  aboutDiv.classList.add('about');
  hoursDiv.classList.add('about__section');
  phoneDiv.classList.add('about__section');
  locDiv.classList.add('about__section');

  hours.innerText = 'Tu-Su | 7a - 4p';
  phone.innerText = '(555) 555 5555';
  loc.innerText = '123 Main St.'

  hoursDiv.appendChild(hoursTitle);
  hoursDiv.appendChild(hours);

  phoneDiv.appendChild(phoneTitle);
  phoneDiv.appendChild(phone);
  
  locDiv.appendChild(locTitle);
  locDiv.appendChild(loc);

  aboutDiv.appendChild(hoursDiv);
  aboutDiv.appendChild(phoneDiv);
  aboutDiv.appendChild(locDiv);

  return aboutDiv;
}

export default about;