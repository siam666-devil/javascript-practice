var buttons = document.getElementsByClassName('btn');
var valueElement = document.querySelector('#value');
var value = parseInt(valueElement.innerText)

for (var i = 0; i < buttons.length; i++) {
  var allBtn = buttons[i];
  allBtn.addEventListener('click', btnClicked)
}

function btnClicked(e) {
  if (e.target.classList.contains('decrease')) {
    value--;
  } else if (e.target.classList.contains('increase')) {
    value++;
  } else {
    value = 0;
  }

  valueElement.innerText = value;

  if (value < 0) {
    valueElement.style.color = 'red'
  } else if (value > 0) {
    valueElement.style.color = 'green'
  } else {
    valueElement.style.color = 'orange'
  }
}