// -------->> 1 Reverse a String <<--------
function reverseString(str) {
    str = str.split('').reverse().join('');
    return str;
}
reverseString("hello");

// -------->> 2 Factorialize a Number <<--------
// Factorials are often represented with the shorthand notation n!

function factorialize(num) {
    if (num === 0 || num === 1) { return 1; }
    return num * factorialize(num-1);
}
factorialize(5);

// -------->> 3 Check for Palindromes <<--------
function palindrome(str) {
    var word =str.toLowerCase().replace(/[\W_]/g, ''); //replace characters we don’t want in the string using RegEx's and then make our string lowercase.
    var length = word.length - 1;
    for (var i=0; i < length/2; i++){
        if (word[i] !== word[length -i]){
            return false;
        }
    }
    return true;
}
palindrome("eye");

// -------->> 4 Find the Longest Word in a String <<--------
function findLongestWord(str) {
  str = str.split(' ');
  str.sort(function (a,b){ //we sort the array and then the longest word will be the first one from array (array[0])
    return b.length - a.length;
  });   
  return str[0].length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");

// -------->> 5 Title Case a Sentence <<--------
function titleCase(str) {
  //we need to make all lettes to lower, then split them into array
  //function map takes char at first place (x[0] and make it upper, then we slice the rest of word and join it (+ x.slice(1))
  return str.toLowerCase().split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join(' ');
} 
titleCase("I'm a little tea pot");

// -------->> 6 Return Largest Numbers in Arrays <<--------

function largestOfFour(arr) {
  // You can do this!
  return arr.map(function(num){
    return num.reduce(function(a,b){
      return a > b ? a : b;
    });
  });
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// -------->> 7 Confirm the Ending <<--------
//ES6

function confirmEnding(str, target) {
  return str.endsWith(target);
}
confirmEnding("Bastian", "n");

//older version
function confirmEnding(str, target) {
  return str.substr(-target.length) == target;
}
confirmEnding("He has to give me a new name", "name");

// -------->> 8 Repeat a string repeat a string <<--------
function repeatStringNumTimes(str, num) {
  return num> 0 ? str.repeat(num) : "";
}
repeatStringNumTimes("abc", 2);

// -------->> 9 Truncate a string <<--------

function truncateString(str, num) {
  return str.length > num ? str.slice(0,num>2 ? num-3 : num) + "..." : str ;
}
truncateString("A-tisket a-tasket A green and yellow basket", 11);

// -------->> 10 Chunky Monkey <<--------
//two interesting solutions
function chunkArrayInGroups(arr, size) {
  var arr2=[];
  for(var i=0;  i<arr.length; i+=size){
    arr2.push(arr.slice(i, i+size));
  }
  return arr2;
}

function chunkArrayInGroups(arr, size) {
  var newArr = [];
  while (arr.length) {
    newArr.push(arr.splice(0,size));
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

// -------->> 11 Slasher Flick <<--------
//arr.slice(begin)
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  return arr.slice(howMany);
}
slasher([1, 2, 3], 2);

// -------->> 12 Mutations <<--------
function mutation(arr) {
  return arr[1].toLowerCase()
    .split('')
    .every(function(a){
      return arr[0].toLowerCase().indexOf(a) !== -1;
  });
}
mutation(["hello", "Hey"]);

// -------->> 13 Falsy Bouncer <<--------
//Boolean constructor is also a function, it returns either true for ‘truthy’ argument or false for ‘falsy’ argument. If the value is omitted or is 0, -0, null, false, NaN, undefined, or the empty string (""), the object has the value of false. All other values, including any object or the string "false", create an object with an initial value of true.
function bouncer(arr) {
  return arr.filter(Boolean);
}
bouncer([7, "ate", "", false, 9]);

// -------->> 14 Seek and Destroy <<--------
