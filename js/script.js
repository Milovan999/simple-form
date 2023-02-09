"use strict";

const formLogin = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
let requiredText = document.getElementById("requiredText");
const submitBtn = document.getElementById("submitBtn");
const cancelBtn = document.getElementById("cancelBtn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (username.value === "" && password.value == "")
    requiredText.textContent = "Both fields are required! Please fill.";
  else if (username.value === "")
    requiredText.textContent = "Username field is required!";
  else if (password.value === "")
    requiredText.textContent = "Password field is required!";
  else {
    requiredText.textContent = "Correct!";

    alert(`Your username is ${username.value}`);
  }
});

cancelBtn.addEventListener("click", (e) => {
  e.preventDefault();

  username.value = "";
  password.value = "";
  requiredText.textContent = "";
});
