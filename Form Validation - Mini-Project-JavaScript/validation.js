function validateForm(e) {
  e.preventDefault();
  // regular expressions
  var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  var regEmail = /^\S+@\S+$/;
  var regPassword = /^[A-Za-z]\w{7,10}$/;
  var regPhone = /^\+?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{5})$/;
  //input from the user
  var name = document.getElementById("name").value.trim();
  var e_mail = document.getElementById("email").value.toLowerCase().trim();
  var pass = document.getElementById("password").value.trim();
  var confirm_pass = document.getElementById("confirm-password").value.trim();
  var phone = document.getElementById("phone").value.trim();

  if (!regName.test(name)) {
    document.getElementById("nameErr").innerHTML =
      "Please enter a valid first and last name.";
    document.getElementById("name").focus();
  }

  if (!regEmail.test(e_mail)) {
    document.getElementById("emailErr").innerHTML =
      "Please enter a valid email address.";
    document.getElementById("email").focus();
  }

  if (!regPassword.test(pass)) {
    document.getElementById("passErr").innerHTML =
      "Please enter a valid Password";
    document.getElementById("password").focus();
  }

  if (pass !== confirm_pass) {
    document.getElementById("confirmPassErr").innerHTML =
      "Please recheck your confirmed password";
    document.getElementById("password").focus();
  }

  if (pass !== confirm_pass) {
    document.getElementById("confirmPassErr").innerHTML =
      "Please recheck your confirmed password";
    document.getElementById("password").focus();
  }

  if (!regPassword.test(phone)) {
    document.getElementById("phoneErr").innerHTML =
      "Please enter the number in +XX XXXXX XXXXX format";
    document.getElementById("phone").focus();
  }
}
