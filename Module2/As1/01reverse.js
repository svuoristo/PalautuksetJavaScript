const numbers = []

for (let i = 0; i < 5; i++) {
  numbers[i] = prompt(`Syötä ${i + 1}. numero:\n`)
}

reversed = []

for (let i = 0; i < numbers.length;  i++) {
  reversed[i] = numbers[numbers.length - (i + 1)]
}

console.log(reversed)