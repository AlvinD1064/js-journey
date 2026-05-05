console.log("Original text:");
let pat1 = "   PATIENT IS HERE   ";
console.log(pat1)
let trimmed = pat1.trim();
let lowerCase = trimmed.toLowerCase();
let cap1 = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
let period = cap1 + "."
console.log("Cleaned text:")
console.log(period)