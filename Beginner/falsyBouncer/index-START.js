/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/


// FOR-OF LOOP (fastest): 
function falsyBouncer(array) {
  let result = [];

  for (let el of array) {
    if (el) {
      result.push(el);
    }
  }

  return result;
}


// FILTER METHOD (slowest): 
// function falsyBouncer(array) {
//   return array.filter(e => e);
// }



module.exports = falsyBouncer