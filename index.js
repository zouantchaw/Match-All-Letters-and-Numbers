// Use shorthand character class \w to count the number of alphanumeric characters in a string

// string initialization
let quoteSample = "The five boxing wizards jump quickly.";

// store regex in a variable
let alphabetRegexV2 = /\w/g; 

// call match method on our string and pass in our regex as a parameter
let result = quoteSample.match(alphabetRegexV2).length;

console.log(quoteSample.match(alphabetRegexV2))
console.log(result)
