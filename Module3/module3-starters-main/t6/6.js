const button = document.querySelector('button');

function alertUser(evt) {
  alert('Button Clicked');
}

button.addEventListener('click', alertUser);