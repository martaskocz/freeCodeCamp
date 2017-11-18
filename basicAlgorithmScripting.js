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

