const dogs = [];
for (let i = 0; i < 6; i++) {
  dogs.push(prompt(`Anna ${i + 1}. koiran nimi:\n`));
}
dogs.sort().reverse();
const ul = document.createElement('ul');
for (let dog of dogs) {
  const li = document.createElement('li');
  li.textContent = dog;
  ul.appendChild(li);
}

document.querySelector('#here').appendChild(ul)