document.getElementById("login-btn").addEventListener('click',function(){

    const inputNumber = document.getElementById("input-mobile-number");
    const contactNumber = inputNumber.value;
    // console.log(contactNumber);

    const inputPin = document.getElementById("input-pin-number");
    const pinNumber = inputPin.value;
    // console.log(pinNumber);

    if(contactNumber==='1234567890' && pinNumber==="1234"){
        alert('Login Succesfull');
        window.location.assign("/Assignment/home.html");
    }
    else{
        alert('Login failed')
        return;
    }

})