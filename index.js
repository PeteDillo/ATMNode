const atm = require("./atm");
const prompt = require("prompt-sync")();
atm.validPin();

function mainMenu() {
  const menu = parseInt(
    prompt(
      "Welcome Customer! Please select from the options below:(1)Balance(2)Withdraw(3)Deposit(4)Exit"
    )
  );
  switch (menu) {
    case 1:
      atm.getBalance();
      return mainMenu();
    case 2:
      atm.withDraw();
      return mainMenu();
    case 3:
      atm.deposit();
      return mainMenu();
    case 4:
      return console.log("Have a great day!");
    default:
      console.log("Please select a valid option.");
      return mainMenu();
  }
}
mainMenu();
