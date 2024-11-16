function rollDice(max) {
  return Math.floor(Math.random() * max + 1)
}

const maxEye = Number(prompt("Anna nopan suurin silmäluku."))
const ul = document.createElement('ul')
let rolled;
do {
  rolled = rollDice(maxEye)
  const li = document.createElement('li')
  li.textContent = rolled
  ul.appendChild(li)
} while (rolled !== maxEye)

document.querySelector("#here").appendChild(ul)