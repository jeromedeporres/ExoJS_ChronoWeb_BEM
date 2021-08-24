var counterBtn = document.querySelector(".button__counterBtn");
var startBtn = document.querySelector(".button__startBtn");
var chronoValue;
var pauseBtn = document.querySelector(".button__pauseBtn");
var btnRaz = document.querySelector(".button__razBtn");

startBtn.addEventListener('click', btnLancer);
pauseBtn.addEventListener('click', btnStop);
btnRaz.addEventListener('click', razBtn);

function btnLancer() {
    clearInterval(chronoValue);
    chronoValue = setInterval(increment, 1000);

    function increment() {
        let value = counterBtn.value;
        value = parseInt(value);
        value = value + 1;
        counterBtn.value = value;
    }
}

function btnStop() {
    clearInterval(chronoValue);
    let value = counterBtn.value;
    counterBtn.value = value;

}

function razBtn() {
    clearInterval(chronoValue);
    value = counterBtn.value;
    value = parseInt(value);
    value = 0;
    counterBtn.value = value;
    btnRaz.classList.replace("btn_color_init", "btn_color_selected");
}