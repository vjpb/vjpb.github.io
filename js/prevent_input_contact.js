function validForm() {
  const name = document.querySelector("#name").value,
        email = document.querySelector("#email").value,
        message = document.querySelector("#message").value,
        pattName = /[A-Za-z _]+/,
        pattEmail = /[a-zA-Z0-9]{0,}([.]?[a-zA-Z0-9]{1,})[@](gmail.com|yahoo.com|hotmail.com|yandex.ru|icloud.com|outlook.com)/;
        isValidName = pattName.test(name);
        isValidEmail = pattEmail.test(email);
  let errorName = document.querySelector(".error-name");
  if (!isValidName) {
    if(name === ""){
      errorName.innerHTML = "";
      errorName.classList.add("name-has-error");
      errorName.insertAdjacentHTML("afterbegin", "Field cannot be empty");
    }else{
      errorName.innerHTML = "";
      errorName.classList.add("name-has-error");
      errorName.insertAdjacentHTML("afterbegin", "The name cannot contain numbers or symbols (!@#$%^&)");
    }
   return false; 
  }else{
    errorName.innerHTML = "";
  }

  let errorEmail = document.querySelector(".error-email");
  if (!isValidEmail) {
    if(email === ""){
      errorEmail.innerHTML = "";
      errorEmail.classList.add("email-has-error");
      errorEmail.insertAdjacentHTML("afterbegin", "Field cannot be empty");

    }else{
      errorEmail.innerHTML = "";
      errorEmail.classList.add("email-has-error");
      errorEmail.insertAdjacentHTML("afterbegin", "Please provide only a gmail, yahoo, hotmail(outlook), yandex, or icloud e-mail address");
    }
    return false;
  }else{
    errorEmail.innerHTML = "";
  }

  let errorMessage = document.querySelector(".error-message");
  if(message === ""){
    errorMessage.innerHTML = "";
    errorMessage.classList.add("message-has-error");
    errorMessage.insertAdjacentHTML("afterbegin", "Field cannot be empty");
   return false; 
  }else{
    errorMessage.innerHTML = "";
  }
}; 

    
  
document.querySelector('#message').onkeypress = function validate(e) {

  if (String.fromCharCode(e.keyCode).match(/[\w, .'-]/) == null) {

    e.preventDefault();

  }
};