const input = document.getElementById("validation-input");
input.addEventListener("blur", checkOnFocus);

function checkOnFocus(event) {
  const inputValue = input.value.trim();
  const requaredLength = input.getAttribute("data-length");

  if (inputValue.length === Number(requaredLength)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
