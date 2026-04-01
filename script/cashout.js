document.getElementById('cashout-btn').addEventListener("click",function(){

    const aggentNumber = getValueFromInput("input-cashout-number");

    if(aggentNumber.length !=11){
        alert("invalid aggent number");
        return;
    }
    const cashoutAmount = getValueFromInput("input-cashout-amount");

    

    const currentBalance = getBalance();

    const newBalanceAmont = currentBalance - Number(cashoutAmount);
    
    if(newBalanceAmont<0){
        alert("invalid amount");
        return;
    }

    const  pinNumber = getValueFromInput("input-cashout-pin-number");

    if(pinNumber === "1234"){
        alert("Pin Number is right");
        setBalance(newBalanceAmont);
    }
    else{
        alert("Wrong pin number");
        return;
    }

    
});










// document.getElementById("cashout-btn").addEventListener("click",function(){
    
//     const cashoutNumberInput = document.getElementById("input-cashout-number");
//     const aggentNumber = cashoutNumberInput.value;

//     if(aggentNumber.length !=11){
//         alert("invalid agent number");
//         return;
//     }
    

//     const cashoutAmountInput = document.getElementById("input-cashout-amount");
//     const cashoutAmout = cashoutAmountInput.value;
    

//     const balanceElement = document.getElementById("cashout-balance");
//     const newBalance = balanceElement.innerText;


//     const newBalanceAmont = Number(newBalance) - Number(cashoutAmout);

//     if(newBalanceAmont < 0){
//         alert("you havn't sufficient balance");
//         return;
//     }
//     const cashoutPinInput = document.getElementById("input-cashout-pin-number");
//     const pinNumber = cashoutPinInput.value;
//     if(pinNumber === "1234"){
//         alert("pin successful");
//         balanceElement.innerText=newBalanceAmont;
        
//     }
//     else{
//         alert("enter valid pin");
//         return;``
//     }
// });