const passwordInput = document.querySelector("#password");
const eyeButton = document.querySelector(".eye-button");
const loginForm = document.querySelector(".login-form");

eyeButton.addEventListener("click", () => {
  const passwordIsHidden = passwordInput.type === "password";

  passwordInput.type = passwordIsHidden ? "text" : "password";
  eyeButton.setAttribute("aria-pressed", String(passwordIsHidden));
  eyeButton.setAttribute("aria-label", passwordIsHidden ? "Hide password" : "Show password");
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
});
