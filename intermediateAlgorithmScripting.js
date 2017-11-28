// -------->> 1 Sum All Numbers in a Range Complete <<--------
//We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

function sumAll(arr) {
  var sum = 0;
  for (var i = Math.min(...arr); i<=Math.max(...arr); i++){
    sum +=i;
  }
  return sum;
}
sumAll([1, 4]);

// -------->> 2 Diff Two Arrays <<--------
//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
//In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// -------->> 3 Roman Numeral Converter <<--------

function convertToRoman(num) {
 var decimalValue = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
 var romanValue = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D'];
}

convertToRoman(36);

// -------->> 4 Wherefore art thou <<--------
// -------->> 5 Search and Replace <<--------
// -------->> 6 Pig Latin <<--------
// -------->> 7 DNA Pairing <<--------
// -------->> 8 Missing letters <<--------
// -------->> 9 Boo who <<--------
// -------->> 10 Convert HTML Entities <<--------
// -------->> 11 Spinal Tap Case <<--------
// -------->> 12 Sum All Odd Fibonacci Numbers <<--------
// -------->> 13 Sum All Primes <<--------
// -------->> 14 Smallest Common Multiple <<--------
// -------->> 15 Finders Keepers <<--------
// -------->> 16 Drop it <<--------
// -------->> 17 Steamroller <<--------
// -------->> 18 Binary Agents <<--------
// -------->> 19 Everything Be True <<--------
// -------->> 20 Arguments Optional <<--------
