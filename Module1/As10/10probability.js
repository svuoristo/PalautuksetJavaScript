const diceAmount = parseInt(prompt('Enter the amount of dice:'));
const eyeNumber = parseInt(prompt('Enter the wanted sum of the eyes:'));

function sumOfEyes(numberOfDice) {
  let sum = 0;
  for (let i = 0; i < numberOfDice; i++) {
    let n = Math.floor((Math.random() * 6) + 1);
    sum += n;
  }
  return sum;
}

let numberOfSuccess = 0;
const iterations = 10000;

for (let i = 0; i < iterations; i++) {
  if (sumOfEyes(diceAmount) === eyeNumber)
    numberOfSuccess += 1;
}

const probability = (numberOfSuccess / iterations).toFixed(2);

document.querySelector('#here').innerHTML = 'The probability to get sum ' +
    eyeNumber + ' with ' + diceAmount + ' dice is about ' + probability * 100 + '%.';