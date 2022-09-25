// alert('I am working');

const errorMessage = document.querySelectorAll('#muted');
const errorIcons = document.querySelectorAll('svg');

const emailInput = document.querySelector('#email');
const inputSpace = document.querySelectorAll('input');

const submitBtn = document.querySelector('.submit-btn');
const inputValuesChecker = document.querySelectorAll('input');

// console.log(inputValuesChecker);

//Adding eventlistener to check if feilds are empty on submission

function checkValidity() {
  for (let i = 0; i < inputValuesChecker.length; i++) {
    errorMessage.forEach((message) => {
      message.style.display = 'block';
    });
    errorIcons.forEach((icons) => {
      icons.style.display = 'block';
    });
    inputSpace.forEach((input) => {
      input.style.borderColor = 'hsl(0, 100%, 74%)';
      input.classList.add('error');
      input.setAttribute('placeholder', '');
      emailInput.setAttribute('placeholder', 'example@example.com');
    });
  }
}

submitBtn.addEventListener('click', checkValidity);
