"use strict";
const account = require("./account");
const prompt = require("prompt-sync")();

function getBalance() {
  console.log(`Your account balance is ${account.balance}`);
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

function withDraw() {
    let userWithdraw = parseInt(prompt('Enter withdraw amount.'))

    if(Number.isInteger(userWithdraw) && userWithdraw <= account.balance){
        account.balance =+ userWithdraw
        getBalance()
    }
    else if(!Number.isInteger(userWithdraw)){
        console.log(`Please enter only numbers.`)
        return withDraw()
    }
    else{
        console.log("Error Insuffience Funds")
        getBalance()
    }

}

function deposit() {
    let userDeposit = parseInt(prompt('Enter withdraw amount.'))

    if(Number.isInteger(userDeposit)){
        account.balance =+ userDeposit
        getBalance()
    }
    else if(!Number.isInteger(userDeposit)){
        console.log(`Please enter only numbers.`)
        return deposit()
    }
}


module.exports.getBalance = getBalance;
module.exports.validPin = validPin;
module.exports.withDraw = withDraw;
module.exports.deposit = deposit;
