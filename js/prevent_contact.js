const nameRegex = /[A-Za-z _]+/;
const mailRegex = /[a-zA-Z0-9]{0,}([.]?[a-zA-Z0-9]{1,})/

const validateInput = (e, regex) => {
  const id = e.target.id;
  const isNotBackspace = e.keyCode !== 8;
  console.log(e.keyCode);
  

  let input = getInputValue(`#${id}`),
    errorInput = getInput(`.error-${id}`);

  const validate = validateRegex(input, regex);
  console.log(regex);

  const isNotEmpty = input !== '';

  errorInput.textContent = '';

  if (validate && isNotEmpty && isNotBackspace) {
    assignEmptyValue(`#${id}`);

    errorInput.classList.add('has-error');
    errorInput.insertAdjacentHTML(
      'afterbegin',
      'The name cannot contain numbers or symbols (!@#$%^&)'
    );
  } else {
    if (input === '') {
      errorInput.textContent = '';
      errorInput.classList.add('has-error');
      errorInput.insertAdjacentHTML('afterbegin', 'Field cannot be empty');
    } else {
      errorInput.insertAdjacentHTML('afterbegin', '');
    }
  }
};

const getInputValue = (input) => {
  return document.querySelector(input).value;
};

const getInput = (input) => {
  return document.querySelector(input);
};

const assignEmptyValue = (input) => {
  document.querySelector(input).value = '';
};

const validateRegex = (input, regex) => {
  value = regex.test(input);

  return !value;
};

document.querySelector('#name').onkeyup = function validate(e) {
  validateInput(e, nameRegex);
};

document.querySelector('#email').onkeyup = function validate(e) {
  validateInput(e, mailRegex);
};


const myBtn = document.querySelector('.submit');
myBtn.disabled = true;