/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/


// FOR-IN ITERATION (fastest): 
function maxRecurringChar(text) {
  let charMap = {};
  let maxValue = 0;
  let maxChar = "";

  for (let c of text) {
    if (charMap[c]) {
      charMap[c] += 1;
    } else {
      charMap[c] = 1;
    }
  }

  for (let c in charMap) {
    if (charMap[c] > maxValue) {
      maxValue = charMap[c];
      maxChar = c;
    }
  }

  return maxChar;
}


// FORM ARRAY FROM CHARACTER MAP (slowest): 
// function maxRecurringChar(text) {
//   let charMap = {};
//   let charArray = [];
//   let valuesArray = [];
//   let maxValue = 0;

//   for (let c of text) {
//     if (charMap[c]) {
//       charMap[c] += 1;
//     } else {
//       charMap[c] = 1;
//     }
//   }

//   charArray = Object.keys(charMap);
//   valuesArray = Object.values(charMap);
//   maxValue = Math.max(...valuesArray);

//   return charArray[valuesArray.indexOf(maxValue)];
// }



module.exports = maxRecurringChar;