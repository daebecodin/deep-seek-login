const loginForm = document.querySelector(".login-form");
const resetForm = document.querySelector(".reset-form");
const signupForm = document.querySelector(".signup-form");
const views = document.querySelectorAll(".view");

document.querySelectorAll(".eye-button").forEach((button) => {
  button.addEventListener("click", () => {
    const passwordInput = button.closest(".password-field").querySelector("input");
    const passwordIsHidden = passwordInput.type === "password";

    passwordInput.type = passwordIsHidden ? "text" : "password";
    button.setAttribute("aria-pressed", String(passwordIsHidden));
    button.setAttribute("aria-label", passwordIsHidden ? "Hide password" : "Show password");
  });
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

document.querySelectorAll("[data-open-view]").forEach((button) => {
  button.addEventListener("click", () => {
    views.forEach((view) => {
      view.hidden = view.dataset.view !== button.dataset.openView;
    });
  });
});

resetForm.addEventListener("submit", (event) => {
  event.preventDefault();
});

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
});
