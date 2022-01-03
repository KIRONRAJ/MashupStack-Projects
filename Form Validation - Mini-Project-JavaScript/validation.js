function validateForm(e) {
  e.preventDefault();
  // regular expressions
  var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;

  //input from the user
  var name = document.getElementById("name").value.trim();

  if (!regName.test(name)) {
    document.getElementById("nameErr").innerHTML =
      "Please enter a valid first and last name.";
    document.getElementById("name").focus();
  }
}
