/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/


// BUILT-IN METHODS: 
/* Slowest */
// function reverseString(text) {
//   return text.split("").reverse().join("");
// }

/* Fastest */
// function reverseString(text) {
//   return text.split("").reduce((acc, c) => c + acc, "");
// }


// FOR LOOP: 
// function reverseString(text) {
//   let result = "";

//   for (let i = text.length - 1; i >= 0; i--) {
//     result += text[i];
//   }

//   return result;
// }


// FOR OF: 
// function reverseString(text) {
//   let result = "";

//   for (let c of text) {
//     result = c + result;
//   }

//   return result;
// }


// RECURSION: 
function reverseString(text) {
  if (text === "") {
    return "";
  } else {
    return reverseString(text.substr(1)) + text[0];
  }
}



module.exports = reverseString