document.getElementById("transfer-btn").addEventListener("click",function(){

    const accountNumber = getValueFromInput("input-transfer-number");
    if(accountNumber.length != 11){
        alert(`Enter valid Account Number`);
        return;
    }

    const sendAmount = getValueFromInput("input-transfer-amount")

    const currentBalance = getBalance();

    const newBalance = currentBalance - Number(sendAmount);

    if(newBalance<0){
        alert("Not Enough money");
        return;
    }

    const pinNumber = getValueFromInput("input-transfer-pin-number");
    if(pinNumber === '1234'){
        alert('Send money successful');
        setBalance(newBalance);
    }
    else{
        alert('worng pin number');
        return;
    }

});