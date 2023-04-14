const minusBtn = document.querySelector(".minus-btn");
const plusBtn = document.querySelector(".plus-btn");
const number = document.querySelector(".number");

let count = 1;

minusBtn.addEventListener("click", function () {
    if (count > 1) {
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


const navtog=document.querySelector('#NAVTOG_1')
const header=document.querySelector('.Header_hamburgerMenu__wy7rh')
const cross=document.querySelector('.cross_s1')

navtog.addEventListener('click',()=>{
    header.classList.remove('hidden_h')
    header.scrollIntoView({behavior:'smooth'})
})
cross.addEventListener('click',()=>{
    header.classList.add('hidden_h')
    header.scrollIntoView({behavior:'smooth'})
})