const atm = require("./atm");
const prompt = require("prompt-sync")();
let userDone = false;
atm.validPin();

let key = prompt('')
do {
    
  switch (key) {
    case 1:
      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      break;
    case 5:
      break;
    case 6:
        userDone = true;
      break;
    default:
      break;
  }
} while (userDone === false);
