const button = document.querySelector(".btn");
const email = document.getElementById("email");
const password = document.getElementById("password");
const warning1 = document.getElementById("warning1");
const warning2 = document.getElementById("warning2");
console.log(button);
button.addEventListener("click", function (e) {
  e.preventDefault();
  if (email.value == "") {
    warning1.innerText = " *nhập email";
    return;
  } else if (password.value == "") {
    warning2.innerText = " *Nhập password";
    return;
  } else {
    window.location.href = "home.html";
  }
});
