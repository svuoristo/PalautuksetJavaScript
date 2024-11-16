function even(numbers) {
  const evenNumbers = []
  numbers.forEach((n) => {
    if (n % 2 === 0) {
      evenNumbers.push(n)
    }
  });
  return evenNumbers
}

testNumbers = [2, 7, -4, 9, 9, 2]
tested = even(testNumbers)
console.log('Alkuperäiset: '+ testNumbers)
console.log('Uudet: ' + tested)