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
// const vinculacionButton = document.getElementById("vinculacionbtn");
// vinculacionButton.addEventListener("click", () => {
//   window.location.href = "datapage.html"; // Cambia 'otra_pagina.html' por la URL del documento a donde deseas redirigir
// });
const BackMenu2 = document.querySelector(".formcontainer2");
const formBackMenu = document.querySelector(".formcontainer");
BackMenu2.addEventListener("click", () => {
  formBackMenu.style.display = "none";
  BackMenu2.style.display = "none";
  formBackMenu.classList.remove("active");
  BackMenu2.classList.remove("active");
});

const openPopupButton = document.getElementById("vinculacionbtn");
const popup = document.getElementById("popup");
openPopupButton.addEventListener("click", () => {
  formBackMenu.classList.toggle("active");
  BackMenu2.classList.toggle("active");
  popup.style.display = "grid";
  formBackMenu.style.display = "grid";
  BackMenu2.style.display = "grid";
});

const info = document.querySelector(".alert-info");
function process(event) {
  event.preventDefault();
  const phoneNumber = phoneInput.getNumber();
  info.style.display = "";
  info.innerHTML = `Phone number in E.164 format: <strong>${phoneNumber}</strong>`;
}

const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
  preferredCountries: ["us", "co", "in", "de"],
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

document.addEventListener("DOMContentLoaded", function () {
  const expedicionDateInput = document.getElementById("expedicionDateInput");

  expedicionDateInput.addEventListener("focus", function () {
    this.type = "date";
  });

  expedicionDateInput.addEventListener("blur", function () {
    if (!this.value) {
      this.type = "text";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(
    ".input-container input, .input-container select"
  );

  inputs.forEach(function (input) {
    input.addEventListener("input", function () {
      if (this.value !== "") {
        this.closest(".input-container").classList.add("has-data");
      } else {
        this.closest(".input-container").classList.remove("has-data");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(
    ".input-container input, .input-container select"
  );

  inputs.forEach(function (input) {
    input.addEventListener("input", function () {
      if (this.value !== "") {
        this.closest(".input-container").classList.add("has-data");
      } else {
        this.closest(".input-container").classList.remove("has-data");
      }

      // Validación para fecha de expedición
      if (this.type === "date" && this.value >= "2005-01-01") {
        this.closest(".input-container").classList.add("invalid-date");
      } else {
        this.closest(".input-container").classList.remove("invalid-date");
      }

      // Validación para número de teléfono
      if (this.type === "tel") {
        this.value = this.value.replace(/[^\d\s+]/g, ""); // Elimina caracteres no numéricos, no espacios y no '+'
      }

      // Validación para correo electrónico
      if (this.type === "email") {
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value);
        if (!isValidEmail) {
          this.closest(".input-container").classList.add("invalid-email");
        } else {
          this.closest(".input-container").classList.remove("invalid-email");
        }
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(
    ".input-container input, .input-container select"
  );

  inputs.forEach(function (input) {
    input.addEventListener("input", function () {
      const isValid = validateField(this);
      const errorMessage =
        this.closest(".input-container").querySelector(".error-message");

      if (isValid) {
        errorMessage.style.display = "none";
      }
    });

    input.addEventListener("focus", function () {
      const errorMessage =
        this.closest(".input-container").querySelector(".error-message");
      errorMessage.style.display = "none";
    });
  });

  function validateField(input) {
    const container = input.closest(".input-container");
    const errorMessage = container.querySelector(".error-message");

    if (input.type === "date" && input.value >= "2005-31-12") {
      container.classList.add("invalid-date");
      errorMessage.style.display = "block";
      return false;
    } else {
      container.classList.remove("invalid-date");
    }

    if (input.type === "email") {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);
      if (!isValidEmail) {
        container.classList.add("invalid-email");
        errorMessage.style.display = "block";
        return false;
      } else {
        container.classList.remove("invalid-email");
      }
    }

    if (input.type === "tel") {
      const isValidPhone = /^[0-9\s+]+$/.test(input.value);
      if (!isValidPhone) {
        container.classList.add("invalid-phone");
        errorMessage.style.display = "block";
        return false;
      } else {
        container.classList.remove("invalid-phone");
      }
    }

    if (input.type === "text" && input.id === "identificacionInput") {
      const isValidNumber = /^[0-9]*$/.test(input.value);
      if (!isValidNumber) {
        container.classList.add("invalid-identificacion");
        errorMessage.style.display = "block";
        return false;
      } else {
        container.classList.remove("invalid-identificacion");
      }
    }

    return true;
  }
});

//

document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(
    ".input-container input, .input-container select"
  );
  const continueButton = document.querySelector(".submit-button");

  continueButton.addEventListener("click", function (event) {
    event.preventDefault();

    let isValid = true;

    inputs.forEach(function (input) {
      if (!validateField(input)) {
        isValid = false;
      }
    });

    if (isValid && !areFieldsEmpty()) {
      window.location.href = "profile.html";
    } else {
      showAlert("Verifica los datos e inténtalo de nuevo.");
    }
  });

  function validateField(input) {
    const container = input.closest(".input-container");
    // ... (código de validación de campos individuales, similar a respuestas anteriores)
    return (
      !container.classList.contains("invalid-date") &&
      !container.classList.contains("invalid-email") &&
      !container.classList.contains("invalid-phone") &&
      !container.classList.contains("invalid-identificacion")
    );
  }

  function areFieldsEmpty() {
    let isEmpty = false;
    inputs.forEach(function (input) {
      if (input.value.trim() === "") {
        isEmpty = true;
      }
    });
    return isEmpty;
  }

  function showAlert(message) {
    alert(message);
  }
});

//
