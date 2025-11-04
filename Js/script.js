console.log("javascript connected");

// button functionality
document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("button clicked");
    // console.log(event);

    const mobileNumber = 01818416464;
    const pinNumber = 6521;

    // console.log(mobileNumber);

    const inputNumber = document.getElementById("mobile-number-input");
    // console.log(inputNumber.value);
    const inputPin = document.getElementById("pin-number-input");
    // console.log(inputPin.value);

    const inputNumberValue = inputNumber.value;
    const inputPinValue = inputPin.value;

    // const inputNumberValue = document.getElementById(
    //   "mobile-number-input"
    // ).value;
    // const inputPinValue = document.getElementById("pin-number-input").value;
    // const inputNumberValue = document
    //   .getElementById("mobile-number-input")
    //   .value.trim();
    // const inputPinValue = document
    //   .getElementById("pin-number-input")
    //   .value.trim();

    const inputNumberConverted = parseInt(inputNumberValue);
    // console.log(inputNumberConverted);
    const inputPinValueConverted = parseInt(inputPinValue);
    // console.log(inputPinValueConverted);

    if (
      inputNumberConverted === mobileNumber &&
      inputPinValueConverted === pinNumber
    ) {
      window.location.href = "./home-page.html";
    } else {
      // console.log('wrong credentials');
      alert("Invalid Credentials");
    }
  });
