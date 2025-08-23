// logout button function
document.getElementById("log-out").addEventListener("click", function () {
  window.location.href = "./index.html";
});
const validPin = 1234;
const couponCode = 769007;

// function for toggle
function toggle(id) {
  const froms = document.getElementsByClassName("from");
  for (const fro of froms) {
    fro.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

function styles(id) {
  const btns = document.getElementsByClassName("button");
  for (const btn of btns) {
    btn.classList.remove("Button");
  }
  document.getElementById(id).classList.add("Button");
}

// transaction secion
const transactionData=[];
console.log(transactionData);

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

    //  pin check
    if (pin !== validPin) {
      alert("please provide valid pin");
      return;
    }

    // account number check
    if (accountNumber.length !== 11) {
      alert("Invalid AC number");
      return;
    }

    // amount validation
    if (isNaN(amount) || amount <= 0) {
      alert("Enter a valid amount");
      return;
    }

    const tottalCurrentBalance = amount + currentBallance;
    document.getElementById("current-ballance").innerText =
      tottalCurrentBalance;

    const data = {
      name: "Add Money",
      date: new Date().toLocaleTimeString()
    };
    transactionData.push(data);

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

  const currentBalance = parseInt(
    document.getElementById("current-ballance").innerText
  );

  //  pin check
  if (pin !== validPin) {
    alert("Invalid Pin");
    return;
  }

  //  amount & balance check
  if (isNaN(cashoutAmount) || cashoutAmount <= 0) {
    alert("Enter a valid amount");
    return;
  }
  if (cashoutAmount > currentBalance) {
    alert("Insufficient Balance");
    return;
  }

  // minus amount
  const tottalCurrentBalance = currentBalance - cashoutAmount;
  document.getElementById("current-ballance").innerText = tottalCurrentBalance;

    const data = {
      name: "Cash Out",
      date: new Date().toLocaleTimeString(),
    };
    transactionData.push(data);

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

  //  amount validation
  if (isNaN(transferAmount) || transferAmount <= 0) {
    alert("Enter a valid amount");
    return;
  }
  if (transferAmount > currentBalance) {
    alert("Insufficient Balance");
    return;
  }

  const tottalCurrentBalance = currentBalance - transferAmount;
  document.getElementById("current-ballance").innerText = tottalCurrentBalance;

    const data = {
      name: "Transfer Money",
      date: new Date().toLocaleTimeString(),
    };
    transactionData.push(data);
});

// get bonus function
document.getElementById("get-bonus").addEventListener("click", function () {
  const coupon = parseInt(document.getElementById("Coupon-btn").value);
  const currentBalance = parseInt(
    document.getElementById("current-ballance").innerText
  );
  if (coupon !== couponCode) {
    alert("Enter Valid Coupon Code");
    return;
  }

  const tottalCurrentBalance = currentBalance + 200;
  document.getElementById("current-ballance").innerText = tottalCurrentBalance;

    const data = {
      name: "Get Bonus",
      date: new Date().toLocaleTimeString(),
    };
    transactionData.push(data);

  document.getElementById("Coupon-btn").value = "";
});

// bill pay function
document
  .getElementById("Pay-Bill-btn")
  .addEventListener("click", function () {});

// bill pay function
document.getElementById("Pay-Bill-btn").addEventListener("click", function () {
  const selectPay = document.getElementById("select-to-pay").value;
  const billerAcNum = parseInt(
    document.getElementById("biller-account-number").value
  );
  const amountToPay = parseInt(document.getElementById("pay-amount").value);
  const billerPin = parseInt(document.getElementById("pay-pin-number").value);

    const data = {
      name: "Bill Pay",
      date: new Date().toLocaleTimeString(),
    };
    transactionData.push(data);
});

//........... toggole function.........

// .....add money

document.getElementById("add-money-btn").addEventListener("click", function () {
  // all section disply none
  toggle("add-money-section");

  // style function call
  styles("add-money-btn");
});

// .....................cashout...............

document.getElementById("cash-out-btn").addEventListener("click", function () {
  // all section disply none
  toggle("cashout-section");

  // style function call
  styles("cash-out-btn");
});

// ......................transfer money.............

document.getElementById("transfer-btn").addEventListener("click", function () {
  // all section disply none
  toggle("transfer-money-section");

  // style function call
  styles("transfer-btn");
});

// ....................get coupon section................

document.getElementById("get-bonus-btn").addEventListener("click", function () {
  // all section disply none
  toggle("get-bonus-section");

  // style function call
  styles("get-bonus-btn");
});

// ......................pay bill section....................

document.getElementById("bill-pay-btn").addEventListener("click", function () {
  // all section disply none
  toggle("bill-pay-section");

  // style function call
  styles("bill-pay-btn");
});
