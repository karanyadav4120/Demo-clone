const minusBtn = document.querySelector(".minus-btn");
const plusBtn = document.querySelector(".plus-btn");
const number = document.querySelector(".number");

let count = 0;

minusBtn.addEventListener("click", function () {
    if (count > 0) {
        count--;
        number.textContent = count;
    }
});

plusBtn.addEventListener("click", function () {
    if (count < 5) {
        count++;
        number.textContent = count;
    }
});