// logout button function
document.getElementById("log-out").addEventListener("click", function () {
  window.location.href = "./index.html";
});
// cashout function
document.getElementById("cashout-btn").addEventListener("click",function(){
    const agentNumber = parseInt(document.getElementById("agent-number").value);
    const cashoutAmount=parseInt(document.getElementById('cashout-amount').value);
    const pin = parseInt(document.getElementById("pin-number").value);


    // minus amount
    const currentBalance = parseInt(
      document.getElementById("current-ballance").innerText);
      const tottalCurrentBalance=currentBalance-cashoutAmount;

      document.getElementById("current-ballance").innerText=tottalCurrentBalance;


});
