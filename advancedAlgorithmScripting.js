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

//----- 2 Record Collection

// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  if (prop == "tracks" && value !== ""){
    if (collection[id][prop]){
      collection[id][prop].push(value);
    }
    else {
      collection[id][prop] = [value];
    }
  }
  else if (value == ""){
    delete collection[id][prop];
  }
  else {
    collection[id][prop] = value;
  }
  
  return collection;
}

// Alter values below to test your code
updateRecords(5439, "tracks", "Take a Chance on Me");


