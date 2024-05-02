/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/


// FOR-LOOP (fastest):
// function longestWord(text) {
//   let wordsArr = text.split(" ");
//   let longestWord = "";

//   for (let word of wordsArr) {
//     if (word.length >= longestWord.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
// }


// REDUCE METHOD (fastest): 
// function longestWord(text) {
//   let result = text.split(" ").reduce((maxLenWord, currentWord) => {
//     if (currentWord.length > maxLenWord.length) {
//       return currentWord;
//     } else {
//       return maxLenWord;
//     }
//   }, "");

//   return result;
// }

function longestWord(text) {
  return text.split(" ").reduce((maxWord, currentWord) => currentWord.length > maxWord.length ? currentWord : maxWord);
}


// SORT METHOD (slowest): 
// function longestWord(text) {
//   return text.split(" ").sort((a, b) => b.length - a.length)[0];
// }



module.exports = longestWord