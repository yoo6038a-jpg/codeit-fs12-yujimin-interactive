// Falsy → false
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false

// Truthy → true
console.log(Boolean(1)); // true
console.log(Boolean("hello")); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true

//////////////////////////////////////////
//////////////////////////////////////////
// Falsy → false
console.log(!!0); // false
console.log(!!""); // false

// Truthy → true
console.log(!!1); // true
console.log(!!"hello"); // true
console.log(!![]); // true
