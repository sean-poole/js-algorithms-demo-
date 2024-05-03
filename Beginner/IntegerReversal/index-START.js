/* CHALLENGE
Given an integer, return an integer that is the reverse 
ordering of that which was received. E.g
  reverseInteger(-123) // should return -321
*/


// REVERSE A STRING: 
function reverseString(text) {
  return [...text].reduce((acc, char) => char + acc, '')
}


// REVERSE AN INTEGER: 
function reverseInteger(num) {
  let reversedNumber = parseInt(reverseString(num.toString()))
  return (reversedNumber * Math.sign(num))
}



module.exports = reverseInteger;