const amount = prompt('Anna osallistujien määrä:\n');
const names = [];
for (let i = 0; i < amount; i++) {
  names[i] = (prompt(`Anna ${i + 1}. osallistujan nimi:\n`));
}

names.sort();

const ol = document.createElement('ol');
names.forEach(name => {
  const li = document.createElement('li');
  li.textContent = name;
  ol.appendChild(li);
});

document.querySelector('#here').appendChild(ol)