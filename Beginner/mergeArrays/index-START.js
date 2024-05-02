/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/


// SETS (slowest): 
// function mergeArrays(...arrays) {
//   let jointArray = [];

//   arrays.forEach(array => {
//     jointArray = [...jointArray, ...array];
//   });

//   return [...new Set([...jointArray])];
// }


// FILTER METHOD (fastest): 
function mergeArrays(...arrays) {
  let jointArray = [];

  arrays.forEach(array => {
    jointArray = [...jointArray, ...array];
  });

  return jointArray.filter((e, i) => jointArray.indexOf(e) === i);
}


// REDUCE METHOD: 
// function mergeArrays(...arrays) {
//   let jointArray = [];

//   arrays.forEach(array => {
//     jointArray = [...jointArray, ...array];
//   });

//   return jointArray.reduce((acc, c) => acc.includes(c) ? acc : [...acc, c], []);
// }



module.exports = mergeArrays