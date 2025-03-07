let age = 24;
console.log(typeof age); //number

age = "24";
console.log(typeof age); //string

let ageInNumbers = Number(age);
console.log(typeof ageInNumbers); //number
console.log(ageInNumbers); //24

// age = "24"; // typeof age => string; ageInNumbers => 24; typeof ageInNumbers => number
// age = "24abc"; // typeof age => string; ageInNumbers => NaN; typeof ageInNumbers => number
// age = "ujjwal"; // typeof age => string; ageInNumbers => NaN; typeof ageInNumbers => number
// age = true; // typeof age => boolean; ageInNumbers => 1; typeof ageInNumbers => number
// age = false; // typeof age => boolean; ageInNumbers => 0; typeof ageInNumbers => number
// age = null; // typeof age => object; ageInNumbers => 0; typeof ageInNumbers => number
// age = undefined; // typeof age => undefined; ageInNumbers => NaN; typeof ageInNumbers => number