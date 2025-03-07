// Conversion to Number

    let age = 24;
    //console.log(typeof age); //number

    age = "24";
    //console.log(typeof age); //string

    let ageInNumbers = Number(age);
    //console.log(typeof ageInNumbers); //number
    //console.log(ageInNumbers); //24

    // age = "24"; // typeof age => string; ageInNumbers => 24; typeof ageInNumbers => number
    // age = "24abc"; // typeof age => string; ageInNumbers => NaN; typeof ageInNumbers => number
    // age = "ujjwal"; // typeof age => string; ageInNumbers => NaN; typeof ageInNumbers => number
    // age = true; // typeof age => boolean; ageInNumbers => 1; typeof ageInNumbers => number
    // age = false; // typeof age => boolean; ageInNumbers => 0; typeof ageInNumbers => number
    // age = null; // typeof age => object; ageInNumbers => 0; typeof ageInNumbers => number
    // age = undefined; // typeof age => undefined; ageInNumbers => NaN; typeof ageInNumbers => number


// Conversion to Boolean

    let bool = true;
    // console.log(bool); //true
    // console.log(typeof bool); //boolean

    bool = 1;
    // console.log(bool); //1
    // console.log(typeof bool); //number
    let boolInBoolean = Boolean(bool);
    // console.log(boolInBoolean); //true
    // console.log(typeof boolInBoolean); //boolean

    // bool = "";  // typeof bool => string; boolInBoolean => false; typeof boolInBoolean => boolean
    // bool = "ujjwal";  // typeof bool => string; boolInBoolean => true; typeof boolInBoolean => boolean
    // bool = null;  // typeof bool => object; boolInBoolean => false; typeof boolInBoolean => boolean
    // bool = undefined;  // typeof bool => undefined; boolInBoolean => false; typeof boolInBoolean => boolean
    // bool = 12;  // typeof bool => number; boolInBoolean => true; typeof boolInBoolean => boolean
    // bool = -12;  // typeof bool => number; boolInBoolean => true; typeof boolInBoolean => boolean
    // bool = [];  // typeof bool => object; boolInBoolean => true; typeof boolInBoolean => boolean
    // bool = {};  // typeof bool => object; boolInBoolean => true; typeof boolInBoolean => boolean

// Conversion to String

    let str = true;
    // console.log(str); //true
    // console.log(typeof str); //boolean
    let strInString = String(str);
    // console.log(strInString); //true
    // console.log(typeof strInString); //string

    // str = false; // typeof str => boolean; strInString => false; typeofString => string
    // str = 1; // typeof str => number; strInString => 1; typeofString => string
    // str = 0; // typeof str => number; strInString => 0; typeofString => string
    // str = -1; // typeof str => number; strInString => -1; typeofString => string
    // str = null; // typeof str => object; strInString => null; typeofString => string
    // str = undefined; // typeof str => undefined; strInString => undefined; typeofString => string
    // str = []; // typeof str => object; strInString => ; typeofString => string
    // str = {}; // typeof str => object; strInString => [object Object]; typeofString => string