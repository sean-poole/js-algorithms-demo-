/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


// ITERATIVE (slowest): 
// function vowelsCounter(text) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let count = 0;

//   for (c of text.toLowerCase()) {
//     if (vowels.includes(c)) count++;
//   }

//   return count;
// }


// REGULAR EXPRESSIONS (fastest): 
function vowelsCounter(text) {
  /*
    Regular expression defined within the slashes.
    Letters within the brackets specify what to look for.
    g - global search: will not start over from the beginning after finding the first match.
    i - case insensitive search: makes the entire express case-insensitive.
  */
  let matchingVowels = text.match(/[aeiou]/gi);

  return matchingVowels ? matchingVowels.length : 0;
}



module.exports = vowelsCounter;
