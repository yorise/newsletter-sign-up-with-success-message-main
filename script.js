const home = document.querySelector(".container");
const success = document.querySelector(".succes-box");

const emailInput = document.getElementById("email");
const error = document.querySelector("input");
const msgError = document.getElementById("error");
const form = document.getElementById("emailForm");

emailInput.addEventListener("input", function () {
  const emailValue = emailInput.value;
  if (emailValue.includes("@")) {
    error.classList.remove("error");
    msgError.style.display = "none";
  }
});

form.addEventListener("submit", function (event) {
  const emailValue = emailInput.value;
  if (!emailValue.includes("@")) {
    event.preventDefault(); // Mencegah form untuk submit
    error.classList.add("error");
    msgError.style.display = "block";
  } else {
    event.preventDefault(); // Mencegah form untuk submit
    home.style.display = "none";
    success.style.display = "block";
  }
});
