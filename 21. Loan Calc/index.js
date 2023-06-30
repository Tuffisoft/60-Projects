const loanAmountEl = document.getElementById("loan-amount");
const interestRateEl = document.getElementById("interest-rate");
const monthsEl = document.getElementById("months");
const paymentInputEl = document.getElementById("payment-input");


function calculateLoan () {
    loanAmountValue = loanAmountEl.value;
    interestRateValue = interestRateEl.value;
    monthsValue = monthsEl.value;

    interest = (loanAmountValue * (interestRateValue * 0.01)) / monthsValue;

    monthlyPayment = (loanAmountValue / monthsValue + interest).toFixed(2);

    paymentInputEl.innerText = `Monthly Payment: ${monthlyPayment}`
}