document.getElementById("login-btn").addEventListener('click',function(){

    const inputNumber = document.getElementById("input-mobile-number");
    const contactNumber = inputNumber.value;
    // console.log(contactNumber);

    const inputPin = document.getElementById("input-pin-number");
    const pinNumber = inputPin.value;
    // console.log(pinNumber);

    if(contactNumber.length !=11 && pinNumber==="1234"){
        alert('Login Succesfull');
        window.location.assign("/home-page/home.html");
    }
    else{
        alert('Login failed')
        return;
    }

})