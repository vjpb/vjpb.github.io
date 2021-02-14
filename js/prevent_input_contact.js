/* ==== Start only number function === */

function isNumberKey(evt) {
  const charCode = evt.which ? evt.which : evt.keyCode;

  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  return true;
}
/* ==== End only number function === */

/* ==== Start submit message function === */

function SubmitMsg() {
  const name = document.querySelector("#name").value;
  const lastname = document.querySelector("#lastname").value;
  const email = document.querySelector("#email").value;
  const id = document.querySelector("#id").value;
  const phone = document.querySelector("#phone").value;
  const message = document.querySelector("#message").value;
  const sent = document.querySelector("#msjSent");
  if (
    name == "" || lastname == "" || email == "" || id == "" || phone == "" || message == "") {
    alert("You must complete all the fields as indicated");
  } else{
    sent.insertAdjacentHTML(
      "beforeEnd",
      `<p>Your message was sent. Thank you!</p>` 
    );
  };
}
/* ==== End submit message function === */
