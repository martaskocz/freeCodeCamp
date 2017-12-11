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
function myReplace(str, before, after) {
  if (before.charAt(0).match(/[A-Z]/)){
      after = after.slice(0,1).toUpperCase() + after.slice(1);
  }
  str = str.replace(before, after);
  return str;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");

// -------->> 6 Pig Latin <<--------
function translatePigLatin(str) {
  let vowel = /[aeiouy]/gi;
  if (vowel.test(str[0])){
    str = str + 'way';
  }
  else {
    let vowelIndex = str.indexOf(str.match(vowel)[0]); //[0] for the first find vowel
    str = str.slice(vowelIndex) + str.slice(0, vowelIndex) + 'ay';
  }
  
  return str;
}
translatePigLatin("california");

// -------->> 7 DNA Pairing <<--------
// -------->> 8 Missing letters <<--------
// -------->> 9 Boo who <<--------
// -------->> 10 Convert HTML Entities <<--------
// -------->> 11 Spinal Tap Case <<--------
// -------->> 12 Sum All Odd Fibonacci Numbers <<--------
function sumFibs(num) {
  var arrFib = [1];
  for (var i = 1; i <=num;) {
      arrFib.push(i);  
      i = arrFib[arrFib.length -1] + arrFib[arrFib.length -2];
  }
  
  arrFib = arrFib.reduce((a,b) =>
    (b%2 !==0) ? a + b : a);
  
  return arrFib;
}
sumFibs(10);

// -------->> 13 Sum All Primes <<--------
function sumPrimes(num) {
  let arr = Array.from({length: num-1}, (v, k) => k+2); 
  let primes = arr.filter( n => {
    for (let i=2; i <= Math.sqrt(n); i++){
      if (n%i === 0){
        return false;
      }
    }
    return true;
  });
  return primes.reduce((a,b) => a+b);
}

sumPrimes(10);

// -------->> 14 Smallest Common Multiple <<--------
// -------->> 15 Finders Keepers <<--------
// -------->> 16 Drop it <<--------
// -------->> 17 Steamroller <<--------
// -------->> 18 Binary Agents <<--------
// -------->> 19 Everything Be True <<--------
// -------->> 20 Arguments Optional <<--------
