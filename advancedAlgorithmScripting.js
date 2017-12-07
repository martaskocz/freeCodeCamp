//----- 1 Validate US Telephone Numbers

function telephoneCheck(str) {
   var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  // ^ - matches beginning of input
  // 1 - 1 as a number
  // \s - single whitespace character --> ? if exist
  // \d - matches any digit
  // x{n} - matches exactly n occurrences of the item x
  // [\s\-]? checks for spaces or dashes between the groups of digits.
  // $ - matches end of input
  
   return regex.test(str);
}

telephoneCheck("555-555-5555");
