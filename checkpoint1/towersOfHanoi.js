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

const movePiece = () => {
  // Your code here

}

const isLegal = () => {
  // Your code here

}

const checkForWin = () => {
    for (var rings in stacks) {
        if (object.hasOwnProperty(property)) {
          // Do things here
        }
      }

}

const towersOfHanoi = (startStack, endStack) => {
  // Your code here

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