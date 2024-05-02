/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/



// INTUITIVE APPROACH (slowest): 
// function palindromeChecker(text) {
//   return text.toLowerCase() === text.toLowerCase().split("").reverse().join("");
// }


// LOOPING AND COMPARING CHARACTERS: 
// function palindromeChecker(text) {
//   let charArray = text.toLowerCase().split("");

//   let result = charArray.every((letter, index) => {
//     return letter === charArray[charArray.length - index - 1];
//   });

//   return result;
// }


// LOOPING AND COMPARING CHARACTERS OPTIMIZED (fastest): 
function palindromeChecker(text) {
  let textLength = text.length;

  for (let i = 0; i < textLength / 2; i++) {
    if (text[i] !== text[textLength - i - 1]) return false;
  }

  return true;
}



module.exports = palindromeChecker;