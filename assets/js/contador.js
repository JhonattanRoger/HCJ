const counter = document.querySelector("#counterValue");
const buttonDecrement = document.querySelector("#buttonDecrement");
const buttonIncrement = document.querySelector("#buttonIncrement");

let value = counter.value;

buttonDecrement.addEventListener('click', () => {
    value  = value !== 0 ? --value : 0;
    counter.value = value;
});

buttonIncrement.addEventListener('click', () => {
    value = ++value;
    counter.value = value;
});