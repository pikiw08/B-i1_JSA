const button = document.querySelector(".btn");
const username = document.getElementById("username");
const password = document.getElementById("password");
const warning1 = document.getElementById("warning1");
const warning2 = document.getElementById("warning2");
console.log(button);
button.addEventListener("click", function (e) {
  e.preventDefault();
  if (username.value == "") {
    warning1.innerText = " *nhập tên tài khoản";
    return;
  } else if (password.value == "") {
    warning2.innerText = " *Nhập password";
    return;
  } else {
    window.location.href = "home.html";
  }
});
