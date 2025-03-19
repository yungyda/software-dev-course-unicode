// Task 1: Extract Code Points from Characters
let inputString1 = "Code";
let firstCodePoint = inputString1.charCodeAt(0); // Unicode of 'C'
let thirdCodePoint = inputString1.charCodeAt(2); // Unicode of 'd'

// Task 2: Create a Word from Code Points
let codePoints = [72, 101, 108, 108]; // Unicode for 'H', 'e', 'l', 'l'
let wordFromCodePoints = String.fromCharCode(...codePoints);

// Task 3: Swap First and Last Characters
let inputString2 = "Launch";
let firstCharCode = inputString2.charCodeAt(0); // Unicode of 'L'
let lastCharCode = inputString2.charCodeAt(inputString2.length - 1); // Unicode of 'h'
let middleSubstring = inputString2.slice(1, -1); // "aunc"
let swappedString = String.fromCharCode(lastCharCode) + middleSubstring + String.fromCharCode(firstCharCode);

// Log all results
console.log({
  firstCodePoint,
  thirdCodePoint,
  wordFromCodePoints,
  swappedString,
});
