// logout button function
document.getElementById("log-out").addEventListener("click", function () {
  window.location.href = "./index.html";
});

// add money button function
document.getElementById('add-money-btn').addEventListener("click",function(){
    // all value store
    const bankName = document.getElementById("bank-name").value;
    const accountNumber = parseInt(
      document.getElementById("account-number").value
    );
    const amount = parseInt(document.getElementById("add-amount").value)
    const pin = parseInt(document.getElementById("pin-number").value);
    console.log(bankName,accountNumber,amount,pin);
    const currentBallance = parseInt(
      document.getElementById("current-ballance").innerText
    );
    const tottalCurrentBalance=amount+currentBallance;
    document.getElementById("current-ballance").innerText=tottalCurrentBalance;

    document.getElementById("bank-name").value='';
    document.getElementById("account-number").value='';
    document.getElementById("add-amount").value='';
    document.getElementById("pin-number").value='';


   






})