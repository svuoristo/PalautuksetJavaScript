let year = parseInt(prompt('Enter a year:'));

let isLeap;

if (year % 100 === 0 && year % 400 !== 0) {
  isLeap = 'not ';
} else if (year % 4 === 0) {
  isLeap = '';
} else {
  isLeap = 'not ';
}

document.querySelector('#here').innerHTML = 'The year ' + year + ' is ' +
    isLeap + 'a leap year.';


