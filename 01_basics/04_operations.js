// Operations in JS

// console.log(3+2); //5
// console.log(3-2); //1
// console.log(3*2); //6
// console.log(3/2); //1.5
// console.log(3%2); //1
// console.log(3**2); //9

// let str1 = "hello";
// let str2 = " ujjwal";
// console.log(str1 + str2); //hello ujjwal

// console.log(1 + "2"); //12
// console.log("1" + 2); //12
// console.log("1" + "2"); //12
// console.log(1 + 2); //3
// console.log("1" + "2" + 3); //123
// console.log(1 + 2 + "3"); //33
// console.log(1 + "2" + 3 + 4); //1234

// console.log(3 + 4 * 5 / 6); //6.333333333333334 // Poor readibility of code

// Arithmetic operations go from left to right
// // Multiplication and division have equal precedence // Subtraction and addition have the same precedence
// ** go from right to left and has more precedence than multiplication/ division
// () has the highest precedence
// () > ** > multiplication / division > subtraction / addition

// Type conversion to number //Not recommended
// console.log(true); //true
// console.log(+true); //1
// console.log(+""); //0
// console.log(+"ujjwal"); //NaN
// console.log(+"0"); //0
// console.log(+"1"); //1
// console.log(+"1234356"); //123456

// let gameCounter = 100;
// console.log(gameCounter); //100
// console.log(gameCounter++); //100
// console.log(++gameCounter); //101

// let a = 4;
// let b = a++;
// console.log(`a is ${a} and b is ${b}`); //a is 5 and b is 4

// let x = 4;
// let y = ++x;
// console.log(`x is ${x} and y is ${y}`); //x is 5 and y is 5

// Additional reading - https://tc39.es/ecma262/#sec-type-conversion