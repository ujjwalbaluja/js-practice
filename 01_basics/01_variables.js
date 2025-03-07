const accountId = 123456; //block scope
let accountEmail = "ujjwal@ujjwal.com"; //block scope
var accountPassword = "abc123"; //global scope
accountLocation = "Delhi"; //similar to var; global scope
let accountState; //undefined 

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountLocation);

console.log(accountId, accountEmail, accountPassword, accountLocation);

// accountId = 234567; //TypeError: Assignment to constant variable.

accountEmail = "ujjwal@baluja.com";
accountPassword = "2020202020";
accountLocation = "Hyderabad";

console.table([accountId, accountEmail, accountPassword, accountLocation, accountState]);

//Try not to use var due to issue in block and functional scope

/*

{
    const first = 1;
    let second = 2;
    var third = 3;
    fourth = 4;

    console.log(first, second, third, fourth); // 1 2 3 4
}

console.log(first); //ReferenceError: first is not defined
console.log(second); //ReferenceError: second is not defined
console.log(third); // 3
console.log(fourth); //4

*/
