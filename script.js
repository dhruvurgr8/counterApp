const decrease = document.querySelector(".decrease");
const increase = document.querySelector(".increase");
const reset = document.querySelector(".reset");
const counter = document.querySelector(".counter");
let count = 0;
function updateCounter() {
  if (count > 0) {
    counter.style.color = "green";
  } else if (count < 0) {
    counter.style.color = "red";
  } else {
    counter.style.color = "black";
  }
}

counter.innerText = count;
decrease.addEventListener("click", () => {
  count--;
  counter.innerText = count;
  updateCounter();
});

increase.addEventListener("click", () => {
  count++;
  counter.innerText = "+" + count;
  updateCounter();
});

reset.addEventListener("click", () => {
  count = 0;
  counter.innerText = count;
});
