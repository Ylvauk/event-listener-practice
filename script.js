const redBtn = document.querySelector('.js-red-button')
const blueBtn = document.querySelector('.js-blue-button')

redBtn.addEventListener('click', changeBackgroundColorToRed)
blueBtn.addEventListener('click', changeBackgroundColorToBlue)

function changeBackgroundColorToBlue() {
  // No need to change the content of this function. Don't worry if this code is new to you.
  document.body.style.backgroundColor = 'blue';
}

function changeBackgroundColorToRed() {
  // No need to change the content of this function. Don't worry if this code is new to you.
  document.body.style.backgroundColor = 'red';
}
