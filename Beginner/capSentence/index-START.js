/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/


// FOR-EACH: 
// function capSentence(text) {
//   let words = text.toLowerCase().split(" ");
//   let capsArray = [];

//   words.forEach(word => capsArray.push(word[0].toUpperCase() + word.slice(1)));

//   return capsArray.join(" ");
// }


// MAP AND SLICE (fastest): 
function capSentence(text) {
  return text.toLowerCase().split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
}


// MAP AND REPLACE (slowest): 
// function capSentence(text) {
//   let words = text.toLowerCase().split(" ");
//   let capsArray = words.map(word => word.replace(word[0], word[0].toUpperCase()));

//   return capsArray.join(" ");
// }



module.exports = capSentence