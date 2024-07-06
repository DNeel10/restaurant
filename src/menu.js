// const contentDiv = document.querySelector('#content');

class Menu {
  constructor() {
    this.dishes = []
  }
  addDish(dish) {
    this.dishes.push(dish)
  }
}

class Dish {
  constructor(name, desc, price) {
    this.name = name;
    this.desc = desc;
    this.price = price;
  }
}

const menu = new Menu();
const coffee = new Dish('Coffee', 'black coffee, with or without cream', 5)
const americano = new Dish('Americano', 'A classic espresso drink that delivers a strong yet balanced coffee experience', 6)
const scone = new Dish('Scone', 'A light, sweetened baked pastry, perfect with cream, jam, or butter.', 6)


menu.addDish(coffee);
menu.addDish(scone);
menu.addDish(americano);

function displayMenu() {

  const mainDiv = document.createElement('div');
  mainDiv.classList.add('container');

  menu.dishes.map(dish => {
    const dishDiv = document.createElement('div');
    const dishName = document.createElement('h2');
    const dishDesc = document.createElement('p');
    const dishPrice = document.createElement('p');

    dishName.classList.add('dish__name');

    dishDiv.classList.add('dish');

    dishName.innerText = `${dish.name}`;
    dishDesc.innerText = `${dish.desc}`;
    dishPrice.innerText = `$${dish.price}`; 

    dishDiv.appendChild(dishName);
    dishDiv.appendChild(dishDesc);
    dishDiv.appendChild(dishPrice);

    mainDiv.appendChild(dishDiv);
  })
  return mainDiv;
}

export default displayMenu;