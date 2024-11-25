function calculate([num1, num2, operate]) {
  if (isNaN(num1) || isNaN(num2)) {
    return 'Not a number!';
  }
  if (operate === null) {
    return 'No operation!';
  }
  switch (operate) {
    case '+':
      return +num1 + +num2;
    case '-':
      return +num1 - +num2;
    case '*':
      return +num1 * +num2;
    case '/':
      return +num1 / +num2;
  }
}

function defineOperation(input) {
  const operations = ['+', '-', '*', '/'];
  for (let i = 0; i < operations.length; i++) {
    const operation = operations[i];
    if (input.includes(operation)) {
      const split = input.split(operation);
      const num1 = split[0];
      const num2 = split[1];
      return [num1, num2, operation];
    }
  }
  return [0, 0, null];
}

function execute(evt) {
  const userInput = document.getElementById('calculation').value.toString();
  result.textContent = calculate(defineOperation(userInput));
}

const button = document.querySelector('button')
button.addEventListener('click', execute)