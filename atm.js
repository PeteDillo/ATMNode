"use strict";
const account = require("./account");
const prompt = require("prompt-sync")();

function getBalance() {
  console.log(`Your account balance is $${account.balance}`);
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

function withDraw(){
  let withdrawAmount = parseInt(prompt("How much would you like to withdraw?"));
  if (withdrawAmount <= account.balance){
      account.balance = account.balance - withdrawAmount;
      //wallet.amount = wallet.amount + withdrawAmount;
      console.log(`You have withdrew $${withdrawAmount}. Your new balance is $${account.balance}`);
  }
  else{
      console.log("Insufficent funds. Please Try Again");
      return withDraw();
  }
}

function deposit() {
    let userDeposit = parseInt(prompt('Enter withdraw amount.'))

    if(Number.isInteger(userDeposit)){
        account.balance = account.balance+ userDeposit
        getBalance()
    }
    else if(!Number.isInteger(userDeposit)){
        console.log("Please enter only numbers.")
        return deposit()
    }
}


module.exports.getBalance = getBalance;
module.exports.validPin = validPin;
module.exports.withDraw = withDraw;
module.exports.deposit = deposit;
