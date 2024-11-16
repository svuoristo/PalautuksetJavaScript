const name = prompt("Your name:\n");

input = Math.floor(Math.random() * 4) + 1
let house = 'nothing'

switch (number) {
  case 1: house = 'Hufflepuff';
  break;
  case 2: house = 'Slytherin';
  break
  case 3: house = 'Ravenclaw';
  break;
  case 4: house = 'Gryffindor';
  break;
}

document.querySelector('#here').innerHTML = name + ', you are ' + house + '.'