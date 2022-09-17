const billInput = document.getElementById('inp-bill');
const noOfPeople = document.getElementById('no-of-people');
const tipAmount = document.getElementById('tip-amount');
const totalPeople = document.getElementById('total-people');
const reset = document.getElementById('reset');
const tipBtns = document.querySelectorAll('.tip-btn');
const customInputEl = document.getElementById("custom-input-el");
const resetBtn = document.getElementById("reset-btn");




noOfPeople.addEventListener('input', noOfPeopleFun);
billInput.addEventListener("input", billInputFun);
customInputEl.addEventListener("input", customInputElFun);
resetBtn.addEventListener("click", resetFun);


billInput.value = "";
noOfPeople.value = "";
tipAmount.innerHTML = "$" + (0.0).toFixed(2);
totalPeople.innerHTML = "$" + (0.0).toFixed(2);
customInputEl.value = "";



let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0;
let tipValueFinal = 0;
let customValue = 0;


tipBtns.forEach((tipBtn) => {
    tipBtn.addEventListener('click', (event) => {
        tipBtn.classList.remove("bg-cyan-800");
        if (event.target.innerHTML == tipBtn.innerHTML) {
            tipBtn.classList.add("bg-cyan-800");
            tipValue = parseFloat(tipBtn.innerHTML) / 100;
        }
        console.log(tipValue);
        calculateTip();
    });
});

function customInputElFun() {
    tipValue = parseFloat(customInputEl.value) / 100;
    calculateTip()
}


function billInputFun() {
    billValue = billInput.value;
    calculateTip()
}

function noOfPeopleFun() {
    peopleValue = noOfPeople.value;
    calculateTip()
}


function calculateTip() {
    const tipssAmount = (billValue * tipValue) / peopleValue
    const totalscore = (billValue / peopleValue) + tipssAmount
    tipAmount.innerHTML = "$" + tipssAmount.toFixed(2);
    totalPeople.innerHTML = "$" + totalscore.toFixed(2);
}

function resetFun() {
    billInput.value = "";
    noOfPeople.value = "";
    tipAmount.innerHTML = "$0.00";
    totalPeople.innerHTML = "$0.00";
    customInputEl.value = "";
    billValue = 0.0;
    peopleValue = 1;
    tipValue = 0;
    tipValueFinal = 0;
    customValue = 0;
}