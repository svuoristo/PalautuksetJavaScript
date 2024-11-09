let text

if (confirm("Should I calculate the square root?")) {
  let number = parseFloat(prompt('Enter a number:'));

  if (number < 0) {
      text = 'The square root of a negative number is not defined.';
  } else if (isNaN(number)) {
      text = 'Invalid number.'
  }
  else {
      let squareRoot = Math.sqrt(number);
      text = 'The square root of ' + number + ' is ' + squareRoot + '.';
  }
} else {
  text = 'The square root is not calculated.';
}

document.querySelector('#here').innerHTML = text