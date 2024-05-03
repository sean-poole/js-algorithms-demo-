/* CHALLENGE: 
Given a two element array of integers, calculate the sum of all numbers from the first element to the second element.
E.g.
  rangeSum([1, 4])  // returns 10
*/


// FOR LOOP: 
// function rangeSum(arr) {
//   let min = Math.min(...arr);
//   let max = Math.max(...arr);
//   let sum = 0;

//   for (let i = min; i <= max; i++) {
//     sum += i;
//   }

//   return sum;
// }


// SUMMATION (fastest): 
function rangeSum(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  
  let sum = ((max - min + 1) * (min + max)) / 2;

  return sum;
}

console.log(rangeSum([1, 4]))   // 10

module.exports = rangeSum;