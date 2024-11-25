const fname = document.querySelector('input[name=firstname]');
const lname = document.querySelector('input[name=lastname]');
const target = document.querySelector('#target')
const form = document.querySelector('#source')

function revealAnswer(evt) {
  evt.preventDefault();
  target.innerHTML = `Your name is ${fname.value} ${lname.value}`
}

form.addEventListener('submit', revealAnswer)