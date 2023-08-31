const passInput = document.getElementById("passw"),
  openEye = document.querySelector(".openEye"),
  closeEye = document.querySelector(".closeEye"),
  label = passInput.nextElementSibling;
openEye.addEventListener("click", () => {
  if (passInput.type === "password") {
    passInput.type = "text";
    openEye.classList.toggle("closed");
    closeEye.classList.remove("closed");
    inputField.style.borderBottom = ".9px solid #830c0c";
  }
});
closeEye.addEventListener("click", () => {
  if ((passInput.type = "text")) {
    passInput.type = "password";
    openEye.classList.remove("closed");
    closeEye.classList.toggle("closed");
  }
});

const body = document.querySelector("body"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    modeText.innerText = "Day Mode";
  } else {
    modeText.innerText = "Night Mode";
  }
});

const empresasSelect = document.getElementById("opciones");
const labelEmpresas = document.getElementById("labelEmpresas");

empresasSelect.addEventListener("focus", function () {
  labelEmpresas.classList.add("active");
});

empresasSelect.addEventListener("blur", function () {
  labelEmpresas.classList.remove("active");
});

function translateLabel(inputId) {
  const inputField = document.getElementById(inputId);
  const label = inputField.nextElementSibling;

  inputField.addEventListener("focus", () => {
    label.style.top = "-55px";
    label.style.color = "#695CFE";
    label.style.borderBottom = ".9px solid #695CFE";
  });

  inputField.addEventListener("blur", () => {
    if (inputField.value === "") {
      label.style.top = "";
      label.style.color = "";
      label.style.borderBottom = "";
    } else {
      label.style.color = "#695CFE"; // Cambiar el color del label si hay contenido
      label.style.borderBottom = ".9px solid #695CFE";
    }
  });
}
translateLabel("user");
translateLabel("passw");

const username = "newuser",
  passw = "12345678",
  chosedEmpresa = "opcion1";
const nicknameLocal = document.getElementById("user"),
  passLocal = document.getElementById("passw"),
  empresaLocal = document.getElementById("opciones");
const botonLogin = document.getElementById("loginButton");
botonLogin.addEventListener("click", () => {
  const usernameLocal = nicknameLocal.value,
    passwLocal = passLocal.value,
    empresaElegida = empresaLocal.value;

  if (
    usernameLocal === username &&
    passwLocal === passw &&
    empresaElegida === chosedEmpresa
  ) {
    nicknameLocal.value = "";
    passLocal.value = "";
    empresaLocal.value = "opcion0";
    window.location.href = "principal.html"; // Cambia 'otra_pagina.html' por la URL del documento a donde deseas redirigir
  } else {
    alert("Credenciales incorrectas o campo(s) vacío(s).");
  }
});
