// logout button function
document.getElementById("log-out").addEventListener("click", function () {
  window.location.href = "./index.html";
});
const validPin = 1234;

// add money button function
document
  .getElementById("add-money-btn-buttom")
  .addEventListener("click", function () {
    // all value store
    const bankName = document.getElementById("bank-name").value;
    const accountNumber = document.getElementById("account-number").value;
    const amount = parseInt(document.getElementById("add-amount").value);
    const pin = parseInt(document.getElementById("pin-number").value);

    const currentBallance = parseInt(
      document.getElementById("current-ballance").innerText
    );
    if (pin !== validPin) {
      alert("please provide valid pin");
      return;
    }

    if (accountNumber.length !== 11) {
      alert("Invalid AC number");
    }

    const tottalCurrentBalance = amount + currentBallance;
    document.getElementById("current-ballance").innerText =
      tottalCurrentBalance;

    document.getElementById("bank-name").value = "";
    document.getElementById("account-number").value = "";
    document.getElementById("add-amount").value = "";
    document.getElementById("pin-number").value = "";
  });

// cashout function
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const agentNumber = parseInt(document.getElementById("agent-number").value);
  const cashoutAmount = parseInt(
    document.getElementById("cashout-amount").value
  );
  const pin = parseInt(document.getElementById("withdraw-pin-num").value);

  // minus amount
  const currentBalance = parseInt(
    document.getElementById("current-ballance").innerText
  );
  const tottalCurrentBalance = currentBalance - cashoutAmount;

  document.getElementById("current-ballance").innerText = tottalCurrentBalance;

  // empty input
  document.getElementById("agent-number").value = "";
  document.getElementById("cashout-amount").value = "";
  document.getElementById("withdraw-pin-num").value = "";
});

// transfer money function

document.getElementById("send-now").addEventListener("click", function () {
  const userAccount = document.getElementById("User-Account-Number").value;
  const transferAmount = parseInt(
    document.getElementById("transfer-amount").value
  );
  const transferPin = parseInt(
    document.getElementById("transfer-pin-number").value
  );

  if (userAccount.length !== 11) {
    alert("Invalid ac number!");
    return;
  }
  if (transferPin !== validPin) {
    alert("Invalid Pin");
    return;
  }
  const currentBalance = parseInt(
    document.getElementById("current-ballance").innerText
  );
  const tottalCurrentBalance = currentBalance - transferAmount;
  document.getElementById("current-ballance").innerText = tottalCurrentBalance;
});

//........... toggole function.........

// add money

document.getElementById("add-money-btn").addEventListener("click", function () {
  // display none sections
  document.getElementById("cashout-section").style.display = "none";
  document.getElementById("transfer-money-section").style.display = "none";

  //  disply block section
  document.getElementById("add-money-section").style.display = "block";

  document.getElementById("add-money-btn").style.backgroundColor = "#F3F8FE";
  document.getElementById("add-money-btn").style.border = "1px solid #0874F2";
  document.getElementById("add-money-title").style.color = "blue";


// ..........all sections style none.......
  // cash out style none
  document.getElementById("cash-out-btn").style.backgroundColor = "";
  document.getElementById("cash-out-btn").style.border = "";
  document.getElementById("cash-out-title").style.color = "";

  // transfer section style none
  document.getElementById("transfer-btn").style.backgroundColor = "";
  document.getElementById("transfer-btn").style.border = "";
  document.getElementById("transfer-btn").style.color = "";

});

// cashout
document.getElementById("cash-out-btn").addEventListener("click", function () {
  // disply none sections
  document.getElementById("add-money-section").style.display = "none";

  document.getElementById("transfer-money-section").style.display = "none";

  // disply block sections
  document.getElementById("cashout-section").style.display = "block";

  document.getElementById("cash-out-btn").style.backgroundColor = "#F3F8FE";
  document.getElementById("cash-out-btn").style.border = "1px solid #0874F2";
  document.getElementById("cash-out-title").style.color = "blue";

// ...........all sections style none..............

  // add money style none
  document.getElementById("add-money-btn").style.backgroundColor = "";
  document.getElementById("add-money-btn").style.border = "";
  document.getElementById("add-money-title").style.color = "";
  // trasnfer money style none
  document.getElementById("transfer-btn").style.backgroundColor = "";
  document.getElementById("transfer-btn").style.border = "";
  document.getElementById("transfer-btn").style.color = "";

});

// transfer money
document.getElementById("transfer-btn").addEventListener("click", function () {
  // disply none sections
  document.getElementById("add-money-section").style.display = "none";
  document.getElementById("cashout-section").style.display = "none";

  // display block section
  document.getElementById("transfer-money-section").style.display = "block";

  // won style
  document.getElementById("transfer-btn").style.backgroundColor = "#F3F8FE";
  document.getElementById("transfer-btn").style.border = "1px solid #0874F2";
  document.getElementById("transfer-btn").style.color = "blue";

  // ...........all none style scetions.............
  // add money style none
  document.getElementById("add-money-btn").style.backgroundColor = "";
  document.getElementById("add-money-btn").style.border = "";
  document.getElementById("add-money-title").style.color = "";

  // cash out style none
  document.getElementById("cash-out-btn").style.backgroundColor = "";
  document.getElementById("cash-out-btn").style.border = "";
  document.getElementById("cash-out-title").style.color = "";
});
