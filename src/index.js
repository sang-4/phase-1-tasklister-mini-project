document.addEventListener("DOMContentLoaded", () => {
  // your code here
const form = document.querySelector("form");
form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  console.log(event.target.create_item.value);
}
});
