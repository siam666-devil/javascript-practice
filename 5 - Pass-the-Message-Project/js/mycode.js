(function () {
  let form = document.querySelector('#message-form');
  let input = document.querySelector('#message');
  let showMsg = document.querySelector('.message-content');
  let feedback = document.querySelector('.feedback');
  console.log(feedback.classList)

  form.addEventListener('submit', function (e) {
    let inputValue = input.value;
    if (inputValue === '') {
      feedback.classList.add('show');
      setTimeout(function () {
        feedback.classList.remove('show')
      }, 2000)
    } else {
      showMsg.textContent = inputValue;
      input.value = '';
    }

    e.preventDefault();
  })
})();