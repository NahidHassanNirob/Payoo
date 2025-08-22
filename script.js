// loging button function
document.getElementById('login-btn').addEventListener('click',function(){
    const mobileNum=12345678910;
    const pinNum=1234;

    const userMobileNum=document.getElementById('Mobile-number').value;
    const userMobileNumConvert=parseInt(userMobileNum);

    const userPin=document.getElementById('pin-number').value;
    const userPinConvert=parseInt(userPin);
    if(userMobileNumConvert===mobileNum && userPinConvert===pinNum){
        window.location.href='./home.html'
    }
    else{
        alert('Invalid Number Pin')
    }


})