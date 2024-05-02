/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
  isAnagram('silent', 'listen') // should return true
*/


// DIRECT COMPARISON (slowest): 
// function isAnagram(stringA, stringB) {
//   const sanitizeString = str => str.toLowerCase().replace(/[^a-z\d]/g, "").split("").sort().join("");

//   return sanitizeString(stringA) === sanitizeString(stringB);
// }


// CHARACTER MAP COMPARISON (fastest): 
function isAnagram(stringA, stringB) {
  function createCharMap(text) {
    let charMap = {};

    for (let c of text) {
      if (charMap[c]) {
        charMap[c] += 1;
      } else {
        charMap[c] = 1;
      }
    }

    return charMap;
  }

  if (stringA.length === stringB.length) {
    let objA = createCharMap(stringA);
    let objB = createCharMap(stringB);

    for (let c in objA) {
      if (objA[c] !== objB[c]) {
        return false;
      }
    }

    return true;
  } else {
    return false;
  }
}



module.exports = isAnagram