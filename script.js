// login button function
document.getElementById("login-btn").addEventListener("click", function () {
  const pinNum = 1234;

  const userMobileNum = document.getElementById("Mobile-number").value.trim();
  const userPin = document.getElementById("pin-number").value.trim();

  // mobile number validation (must be 11 digits and start with "01")
  if (
    userMobileNum.length !== 11 ||
    isNaN(userMobileNum) ||
    !userMobileNum.startsWith("01")
  ) {
    alert("Invalid Mobile Number (must be 11 digits and start with 01)");
    return;
  }

  // pin validation
  if (userPin.length !== 4 || isNaN(userPin)) {
    alert("Invalid Pin (must be 4 digits)");
    return;
  }

  // check pin only
  if (parseInt(userPin) === pinNum) {
    window.location.href = "./home.html";
  } else {
    alert("Wrong pin!");
  }
});
