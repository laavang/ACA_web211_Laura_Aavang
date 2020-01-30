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
  stacks[endStack].push(selectedPiece);
}

const isLegal = (startStack, endStack) => {

  // checks if user entered a, b, or c
  const legalInputs = ["a", "b", "c"];

  if ( legalInputs.includes(startStack) == false || 
       legalInputs.includes(endStack) == false )
  {
    return false;
  }

  // if piece is moving to empty stack, move is legal
  if ( stacks[endStack].length == 0)
    {
      return true;
    }
  // if piece is moving onto a larger piece, move is legal
  else if ( stacks[startStack].slice(-1) < stacks[endStack].slice(-1) )
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
  
  if ( isLegal(startStack, endStack) == true )
  {
    movePiece(startStack, endStack);
  }
  else
  {
    console.log("Illegal move or entry.");
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