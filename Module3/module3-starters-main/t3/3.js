'use strict';
const names = ['John', 'Paul', 'Jones'];

const target = document.querySelector('#target')

let innerhtml = ''

for (name of names) {
  innerhtml += '<li>' + name + '</li>'
}

target.innerHTML = innerhtml