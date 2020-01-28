'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};
// the larger the number, the wider the ring



const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

const movePiece = (startStack, endStack) => {

  let selectedPiece = stacks[startStack].pop();
  stacks[endStack] = stacks[endStack].push(selectedPiece);
}

const isLegal = (selectedPiece, basePiece) => {
  if (selectedPiece < basePiece) 
  {
    return true;
  }
  else 
  {
    return false;
  }
}

// const checkForWin = () => {
//     for (var rings in stacks) {
//         if (object.hasOwnProperty([1, 2, 3, 4])) {
//           console.log("You've won!");
//           return true;
//         }
//       }

// }

const towersOfHanoi = (startStack, endStack) => {
  
  let permittedInputs = "abc";
  let selectedPiece = stacks[endStack].pop();
  let basePiece = stacks[endStack].pop();

  isLegal(selectedPiece, basePiece);

  if (permittedInputs.includes(startStack) == false || permittedInputs.includes(endStack) == false) 
  {
    return;
  }
  if (isLegal == true) 
  {
  movePiece();
  }

  movePiece(startStack, endStack);

  // checkForWin();

}

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

getPrompt();