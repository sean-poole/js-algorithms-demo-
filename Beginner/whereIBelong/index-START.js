/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/


// FOR-LOOP TO FIND IMMEDIATE LARGER VALUE POSITION: 
// function whereIBelong(arr, num) {
//   let sortedArray = arr.sort((a, b) => a - b);

//   for (let i = 0; i < sortedArray.length; i++) {
//     if (sortedArray[i] >= num) {
//       return i;
//     }
//   }

//   return arr.length;
// }


// FOR-LOOP TO DETERMINE THE NUMBER OF SMALLER VALUES (fastest): 
function whereIBelong(arr, num) {
  let count = 0;

  for (let n of arr) {
    if (n < num) {
      count++;
    }
  }

  return count;
}


// WHILE LOOP TO COUNT SMALLER VALUES:
// function whereIBelong(arr, num) {
//   let sortedArray = arr.sort((a, b) => a - b);
//   let count = 0;

//   while (num > sortedArray[count]) {
//     count++;
//   }

//   return count;
// }


// FIND INDEX OF THE VALUE DIRECTLY: 
// function whereIBelong(arr, num) {
//   arr.push(num);
//   return arr.sort((a, b) => a - b).indexOf(num);
// }



module.exports = whereIBelong