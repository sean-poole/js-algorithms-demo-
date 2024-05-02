/* CHALLENGE
Receiving a sentence, a word in the sentence and a replacement for that word as arguments, perform a search and replace on the sentence using the arguments provided and return the new sentence. E.g
  searchReplace("He is Sleeping on the couch", "Sleeping", "sitting")
  // should return "He is Sitting on the couch"
*/


// REPLACE METHOD (fastest): 
function searchReplace(str, word, newWord) {
  if (word[0] === word[0].toUpperCase()) {
    newWord = newWord[0].toUpperCase() + newWord.slice(1);
  }

  return str.replace(word, newWord);
}


// REGULAR EXPRESSIONS (slowest): 
// function searchReplace(str, word, newWord) {
//   let regex = new RegExp(word, "gi")

//   if (/[A-Z]/.test(word[0])) {

//     newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1);
//   }

//   return str.replace(regex, newWord)
// }



module.exports = searchReplace