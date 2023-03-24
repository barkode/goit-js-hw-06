const form = document.querySelector(".login-form");
form.addEventListener("submit", hundleSubmit);

function hundleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Не всі поля було заповлено.");
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };
    console.log(formData);
    form.reset();
  }
}
