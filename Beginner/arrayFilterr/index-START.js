/* CHALLENGE
Return the first element from the given array that passes the test specified by the provided function. Both the array and function are passed into the function as arguments as shown below: 
E.g.
  arrayFilter(arr, func)
*/


// IMPERATIVE (fastest): 
function arrayFilter(arr, func) {
  for (let el of arr) {
    if (func(el)) {
      return el;
    }
  }

  return undefined;
}


// FILTER METHOD: 
// function arrayFilter(arr, func) {
//   return arr.filter(e => func(e))[0];
// }


// FIND METHOD: 
// function arrayFilter(arr, func) {
//   return arr.find(e => func(e));
// }


console.log(arrayFilter([1, 2, 3], func = (num) => num > 1))
console.log(arrayFilter([1, 2, 3], func = (num) => num < 1))
