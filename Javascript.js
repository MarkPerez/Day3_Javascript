//Event Listener for calculate button
var event1 = document.getElementById("button1");
event1.addEventListener('click', activate, false);

//Event Listener for reset button
var event2 = document.getElementById("button2");
event2.addEventListener('click', reset, false);

function activate(){
    //take user input for amount to borrw
    var amountToBorrow = parseInt(document.getElementById("input1").value);
    //take user input for interest rate
    var interestRate = parseInt(document.getElementById("input2").value);
    //take user input for length of loan
    var lengthOfLoan = parseInt(document.getElementById("input3").value);
    
    //calculation for total repayment
    var totalRepayment = Math.round((amountToBorrow * Math.pow(((interestRate+100)/100) * (lengthOfLoan),lengthOfLoan))*100)/100;
    
    //calculation for total interest
    var totalInterest = Math.round((totalRepayment - amountToBorrow)*100)/100;
    
    //calculation for monthly interest
    var monthlyInterest = Math.round((totalInterest / 12)*100)/100;
    
    document.getElementById("demo").innerHTML = "Total repayment: £" + totalRepayment + "<br>" + "Monthly interest: £" + monthlyInterest + "<br>" + "Total interest: £" + totalInterest;
} 
    
function reset() {
    document.getElementById("demo").innerHTML = "";
    
}
