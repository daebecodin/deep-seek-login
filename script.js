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

  loginForm.querySelectorAll(".field").forEach((field) => {
    const input = field.querySelector("input");
    const isEmpty = input.value.trim() === "";

    field.classList.toggle("invalid", isEmpty);
    input.setAttribute("aria-invalid", String(isEmpty));
  });
});

loginForm.querySelectorAll("input").forEach((input) => {
  input.addEventListener("input", () => {
    const field = input.closest(".field");
    field.classList.remove("invalid");
    input.setAttribute("aria-invalid", "false");
  });
});
