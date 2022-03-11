"use strict";
const account = require("./account");
const prompt = require("prompt-sync")();

function getBalance() {
  console.log(account.balance);
}
function validPin() {
  let userPin = prompt("Please enter your pin.");
  if (userPin == account.pin) {
    console.log("Pin Approved");
  } else {
    console.log("You entered the wrong pin");
    return validPin();
  }
}

module.exports.getBalance = getBalance;
module.exports.validPin = validPin;
