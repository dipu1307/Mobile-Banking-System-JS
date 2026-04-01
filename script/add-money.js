document.getElementById("add-money-btn").addEventListener("click",function(){

    const bankAccount = getValueFromInput("add-money-bank");

    if(bankAccount === "Select Bank"){
        alert("select a bank");
        return;
    }
    const accountNumber = getValueFromInput("input-add-money-number");

    if(accountNumber.length != 11){
        alert("Enter 11 digit Account Number");
        return;
    }

    const amount = getValueFromInput("input-add-money-amount");
    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(amount);
    

    const pinNumber = getValueFromInput("input-add-money-pin-number");
    if(pinNumber === "1234"){
        alert(`add money succful from ${bankAccount}, account number: ${accountNumber} at ${new Date()}`);
        setBalance(newBalance);

        const historyOfTransaction = document.getElementById("trans-container");

        const newHistory = document.createElement("div");

        newHistory.innerHTML=`
        
        <div class="trans-card p-5 bg-base-100">
            add money succful from ${bankAccount}, account number ${accountNumber} at ${new Date()}
            </div>
        
        `;
        historyOfTransaction.append(newHistory);
    }
    else{
        alert("Enter Valid pin")
    }
});