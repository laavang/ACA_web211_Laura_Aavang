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

  // removes last item from startStack, and saves it into "selectedPiece" variable
  let selectedPiece = stacks[startStack].pop();
  // adds selectedPiece variable onto end of endStack
  stacks[endStack] = stacks[endStack].push(selectedPiece);
}

const isLegal = (startStack, endStack) => {

  // checks if user entered a, b, or c
  const legalInputs = ["a", "b", "c"];

  if ( legalInputs.includes(startStack) == false || 
       legalInputs.includes(endStack) == false )
  {
    console.log("Invalid entry.");
    return false;
  }

  // if piece from startStack is smaller than endStack (or endStack is empty), then the move is legal
  if ( stacks[endStack]=[] || stacks[startStack].slice(-1) < stacks[end].slice(-1) )
    {
     return true;
     console.log("Legal move.");
    }
    else 
    {
    return false;
    console.log("Illegal move.");
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
  
  isLegal(startStack, endStack);
  if (isLegal == true)
    {
  movePiece(startStack, endStack);
    }
  // checkForWin(startStack, endStack);

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










// 'use strict';

// const assert = require('assert');
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });


// let stacks = {
//   a: [4, 3, 2, 1],
//   b: [],
//   c: []
// };
// // the larger the number, the wider the ring



// const printStacks = () => {
//   console.log("a: " + stacks.a);
//   console.log("b: " + stacks.b);
//   console.log("c: " + stacks.c);
// }

// const movePiece = (startStack, endStack) => {

//   let selectedPiece = stacks[startStack].pop();
//   stacks[endStack] = stacks[endStack].push(selectedPiece);
// }

// const isLegal = (selectedPiece, basePiece) => {
//   if (selectedPiece < basePiece) 
//   {
//     return true;
//   }
//   else 
//   {
//     return false;
//   }
// }

// // const checkForWin = () => {
// //     for (var rings in stacks) {
// //         if (object.hasOwnProperty([1, 2, 3, 4])) {
// //           console.log("You've won!");
// //           return true;
// //         }
// //       }

// // }

// const towersOfHanoi = (startStack, endStack) => {
  
//   let permittedInputs = "abc";
//   let selectedPiece = stacks[endStack].slice(-1);
//   let basePiece = stacks[endStack].slice(-1);

//   // isLegal(selectedPiece, basePiece);

//   // if (permittedInputs.includes(startStack) == false || permittedInputs.includes(endStack) == false) 
//   // {
//   //   return;
//   // }
//   // if (isLegal == true) 
//   // {
//   // movePiece();
//   // }

//   movePiece(startStack, endStack);

//   // checkForWin();

// }

// const getPrompt = () => {
//   printStacks();
//   rl.question('start stack: ', (startStack) => {
//     rl.question('end stack: ', (endStack) => {
//       towersOfHanoi(startStack, endStack);
//       getPrompt();
//     });
//   });
// }

// getPrompt();