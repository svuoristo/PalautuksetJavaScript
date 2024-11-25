const button = document.getElementById('start');
const operation = document.getElementById('operation');
const result = document.getElementById('result')

function calculate(num1, num2, operate) {
  if (isNaN(num1) || isNaN(num2)) {
    return 'Not a number!'
  }
  switch (operate) {
    case 'add':
      console.log('1')
      return +num1 + +num2
    case 'sub':
      console.log('2')
      return +num1 - +num2
    case 'multi':
      console.log('3')
      return +num1 * +num2
    case 'div':
      console.log('4')
      return +num1 / +num2
  }
}

function executeCalculation() {
  const num1 = document.getElementById('num1').value
  const num2 = document.getElementById('num2').value
  const operate = operation.value
  result.textContent = calculate(num1, num2, operate)
}

button.addEventListener('click', executeCalculation)