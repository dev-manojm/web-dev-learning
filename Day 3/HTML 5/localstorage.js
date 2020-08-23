function store() {
  var inputEmail = document.getElementById("email");
  localStorage.setItem("email", inputEmail.value);
}

// localStorage.setItem("myname","admin")
//    document.getElementById("email").innerHTML=localStorage.getItem("email")
var emails = localStorage.getItem("email");

document.getElementById("email").innerHTML = "Hello " + email;
document.write(emails);
