// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.
const date = new Date();
const year = document.getElementById("year");
year.innerText = date.getFullYear();
const popupHeading = document.querySelector(".error h4");
const popup = document.querySelector(".error");
const popupText = document.querySelector(".error p");
const popupSuccess = "";
const invalidEmail = "Please enter a valid email address.";
const emailRequired = "Email address is required.";
const emailError = document.querySelector(".email-error");
const submit = document.getElementById("submit-btn");
const email = document.querySelector("input");
submit.addEventListener("click", (event) => {
  event.preventDefault();
  if (email.validity.valueMissing) {
    emailError.innerText = emailRequired;
  } else if (!email.validity.valid) {
    emailError.innerText = invalidEmail;
  } else {
    emailError.innerText = "";
    fetch("https://www.greatfrontend.com/api/projects/challenges/newsletter", {
      method: "POST",
      body: JSON.stringify({
        email: email.value,
      }),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((resp) => {
        console.log(resp);
        return resp.json();
      })
      .then((res) => {
        console.log(res);
        popupHeading.innerText = "Success";
        popupText.innerText = res.message;
        popup.style.opacity = 1;
        popup.classList.add("font-c-green");
        popup.classList.add("bg-green");
        setTimeout(() => {
          popup.style.opacity = 0;
        }, 4000);
      });
  }

  console.log(email.validity);
});
