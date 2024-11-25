const image = document.querySelector('#trigger')

function changeImageToB() {
  const target = document.querySelector('#target')
  target.src = "img/picB.jpg"
}

function changeImageToA() {
  const target = document.querySelector('#target')
  target.src = "img/picA.jpg"
}

image.addEventListener('mouseenter', changeImageToB)
image.addEventListener('mouseout', changeImageToA)