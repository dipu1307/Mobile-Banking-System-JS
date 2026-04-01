

function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id,value)

    return value;
}
function getBalance(){
    const balanceElement  = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log("current balance",Number(balance))
    return Number(balance);
}
function setBalance(value){
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText  = value;
}

 function showOnly(id){
    console.log("Show the click");
    const addMoney = document.getElementById("add-money");
    const cashOut = document.getElementById("cashout");
    const sendMoney = document.getElementById("transfer-money");

    addMoney.classList.add("hidden");
    cashOut.classList.add("hidden");
    sendMoney.classList.add("hidden");

    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
 }