// console.log(2 > 1); //true
// console.log(2 < 1); //false
// console.log(2 == 1); //false
// console.log(2 >= 1); //true
// console.log(2 <= 1); //false


// Automatically converts to number while comparison (Might not give desired results)
// console.log("2" > 1); //true
// console.log("002" > 1); //true
// console.log("-002" > 1); //false


// The equality check (==) and comparison operators (< > <= >=) work differently
// Comparisons convert null into a number, treating as 0
// That's why null >= 0 is true and null > 0 is false
// console.log(null == 0); //false
// console.log(null > 0); //false
// console.log(null >= 0); //true
// console.log(null < 0); //false
// console.log(null <= 0); //true

// console.log(null == 1); //false
// console.log(null > 1); //false
// console.log(null >= 1); //false
// console.log(null < 1); //true
// console.log(null <= 1); //true

// console.log(null == -1); //false
// console.log(null > -1); //true
// console.log(null >= -1); //true
// console.log(null < -1); //false
// console.log(null <= -1); //false

// console.log(undefined == 0); //false
// console.log(undefined > 0); //false
// console.log(undefined >= 0); //false
// console.log(undefined < 0); //false
// console.log(undefined <= 0); //false

// console.log(NaN == 0); //false
// console.log(NaN > 0); //false
// console.log(NaN >= 0); //false
// console.log(NaN < 0); //false
// console.log(NaN <= 0); //false

// console.log("abc" >= 0); //false
// console.log("abc" <= 0); //false
// console.log("abc" == 0); //false
// console.log("abc" > 0); //false
// console.log("abc" < 0); //false


// === strict check; checks datatype and value both
// console.log(2 === 2); //true
// console.log(2 == 2); //true
// console.log("2" == 2); //true
// console.log("2" === 2); //false
// console.log("NaN" == NaN); //false
// console.log("true" == true); //false
// console.log("undefined" == undefined); //false