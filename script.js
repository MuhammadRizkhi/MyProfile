const scriptURL = "https://script.google.com/macros/s/AKfycbwqnBm_9ZtCJAregYD7rT8_PxSM9SB3fvly0u7v5BSS2sP1il9kBiNfkoD6gMd9q7wu/exec";
const form = document.forms["mr-contact-form"];
const btnSubmit = document.querySelector(".btn-submit");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // submit click
  // loading tombol muncul
  btnLoading.classList.toggle("d-none");
  btnSubmit.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // loading tombol finish
      // submit click muncul
      btnLoading.classList.toggle("d-none");
      btnSubmit.classList.toggle("d-none");
      // alert
      myAlert.classList.toggle("d-none");
      // Reset Form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
