let str = "         how are you";

//trim , slice  ,  join
console.log("Before trime:-", str);
//trim remove all left side or right side spaces
let strTrim = str.trim(); // not change original string
console.log("Aftere trime:-", strTrim);

let strSlice = str.slice(0, 3);
console.log(strSlice); // not change original string

let strChar = str.charAt(0); // gives the value of that character
console.log(strChar);

let strAscii = strTrim.charCodeAt(0); // gives the ascii code of that character
console.log(strAscii);

// to join the string we need first array of string
let splitString = str.split(" "); // create an array of each word
let strReplacer = splitString.join("+"); //join all by "+"
console.log(strReplacer); // not change original string

console.log(str.split(" ")); // not change original string

//substring of a string
console.log(strTrim.substring(0, 3));
console.log(str);
