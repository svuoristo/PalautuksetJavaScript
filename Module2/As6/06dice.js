function rollDice() {
  return Math.floor(Math.random() * 6 + 1);
}

const ul = document.createElement('ul');
let rolled;
do {
  rolled = rollDice();
  const li = document.createElement('li');
  li.textContent = rolled;
  ul.appendChild(li);
} while (rolled !== 6);

document.querySelector('#here').appendChild(ul);