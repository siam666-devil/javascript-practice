// const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// const btn = document.getElementById("btn");
// const color = document.querySelector(".color");

// btn.addEventListener("click", function () {
//   let hexColor = "#";
//   for (let i = 0; i < 6; i++) {
//     hexColor += hex[getRandomNumber()];
//   }
//   // console.log(hexColor);

//   color.textContent = hexColor;
//   document.body.style.backgroundColor = hexColor;
// });

// function getRandomNumber() {
//   return Math.floor(Math.random() * hex.length);
// }


var hex = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var button = document.querySelector('button');
var body = document.querySelector('body')

button.addEventListener('click', changeColor)

function changeColor() {
  var hexColor = '#'
  for (var i = 0; i < 6; i++) {
    hexColor = hexColor + hex[random()]
    console.log('for  loop inside :' + hexColor)
  }
  console.log('for  loop outside :' + hexColor)
  body.style.backgroundColor = hexColor;
  document.querySelector('.color').innerHTML = hexColor;
}


function random() {
  return Math.floor(Math.random() * hex.length)
}