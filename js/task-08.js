const form = document.querySelector('.login-form');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const {
        elements: { email, password }
      } = event.currentTarget;
    
      if (email.value === "" || password.value === "") {
        window.alert("Bсе поля должны быть заполнены");
      } else {
        console.log({
            email: email.value,
            password: password.value,
        })
        form.reset();
      }
});

