// auth.controller.js
import { register, login } from "./auth.js";

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

window.registerUser = async () => {
  try {
    await register(emailInput.value, passwordInput.value);
    alert("Account created!");
    window.location.href = "chat.html";
  } catch (err) {
    alert(err.message);
  }
};

window.loginUser = async () => {
  try {
    await login(emailInput.value, passwordInput.value);
    window.location.href = "chat.html";
  } catch (err) {
    alert(err.message);
  }
};
