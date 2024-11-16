const numbers = [];
let input = prompt('Anna numero:\n');

while (!numbers.includes(Number(input))) {
  if (isNaN(Number(input))) {
    alert('Tuo ei ollut numero! Yritä uudestaan:\n');
  } else {
    numbers.push(Number(input));
  }
  input = prompt('Anna uusi numero:\n');
}
console.log('Numero oli jo kertaalleen syötetty.');

for (input of numbers.sort((a, b) => a - b)) {
  console.log(input);
}