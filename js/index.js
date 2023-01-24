const textAreaEl = document.getElementById("textarea");
const totalCharEl = document.getElementById("total-counter");
const remainingCharEl = document.getElementById("remaining-counter");

textAreaEl.addEventListener("keyup", () => {
  console.log("key is pressed");
  updateCounter();
});

updateCounter();

function updateCounter() {
  totalCharEl.innerText = textAreaEl.value.length;

  remainingCharEl.innerText =
    textAreaEl.getAttribute("maxlength") - textAreaEl.value.length;
}
