/* 
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/


// LOOPING THROUGH THE ARRAY: 
// function chunkArray(array, size) {
//   let result = [];

//   for (let i = 0; i < array.length; i++) {
//     // Assign the last subarray of 'result' to lastArray.
//     let lastArray = result[result.length - 1];
//     if (!lastArray || lastArray.length === size) {
//       // If lastArray is undefined OR lastArray has reached size capacity,
//       // push the current element to result and start a new subarray.
//       result.push([array[i]]);
//     } else {
//       // Else, push the current element to lastArray.
//       lastArray.push(array[i]);
//     }
//   }

//   return result;
// }


// ITERATING WITH THE NUMBER OF CHUNKS; 
// function chunkArray(array, size) {
//   let result = [];
//   let arrayCopy = [...array];
//   while (arrayCopy.length > 0) {
//     result.push(arrayCopy.splice(0, size));
//   }

//   return result;
// }


// SLICE METHOD (fastest): 
// function chunkArray(array, size) {
//   let result = [];

//   for (let i = 0; i < array.length; i += size) {
//     let subarray = array.slice(i, i + size);
//     result.push(subarray);
//   }

//   return result;
// }


// RECURSION (slowest): 
// function chunkArray(array, size) {
//   if (array.length <= size) {
//     return [array];
//   }

//   return [array.slice(0, size), ...chunkArray(array.slice(size), size)];
// }



module.exports = chunkArray