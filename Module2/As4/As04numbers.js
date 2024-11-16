const numbers = [];
let number;

do {
  number = prompt('Anna numero:\n');
  if (isNaN(Number(number))) {
    alert('Tuo ei ollut numero! Yritä uudestaan:\n');
  } else {
    number = Number(number);
    numbers.push(number);
  }
} while (number !== 0);

for (number of numbers.sort((a,b) => b-a)) {
  console.log(number);
}