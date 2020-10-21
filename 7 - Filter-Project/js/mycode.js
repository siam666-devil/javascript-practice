// Filter Items;

let storeItem = document.querySelector('#store-items');
let buttons = document.querySelectorAll('.btn')
let divs = storeItem.children;

for (let i = 0; i <= divs.length - 1; i++){
  let div = divs[i];
  buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
      e.preventDefault();

      if (e.target.hasAttribute('data-filter') === true) { 
        if (e.target.getAttribute('data-filter') === div.getAttribute('data-item')) {
          div.style.display = 'block'
        } else {
          div.style.display = 'none'
        }

        if (e.target.getAttribute('data-filter') === 'all') {
          div.style.display = 'block'
        } 
      }
    })
  })
}



// Search Items;


let searchField = document.querySelector('#search-item');
let storeName = document.querySelectorAll('#store-item-name');
  

  storeName.forEach(function (store) {
    let storeNameVal = store.textContent.toLowerCase();
    let mainDiv = store.parentElement.parentElement.parentElement.parentElement;
  
    searchField.addEventListener('keyup', function (e) {
      e.preventDefault();
      let searchFieldText = searchField.value.trim();
      if (storeNameVal.includes(searchFieldText)) {
        mainDiv.style.display = 'block'
      } else {
        mainDiv.style.display = 'none'
      }
    })
  })



