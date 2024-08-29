// Primitive data types
// 7 types => String, Number, Boolean, null, undefined, BigInt, Symbol

const score = 100;

const scorevalue = 100.9;

const isLoggedIn = false;

const outsideTemp = null;

let userEmail;

let userName = "Priyanka"

const id = Symbol('123');
const anotherid = Symbol('123');
console.log(id === anotherid); 

const bigNumber = 4364747373n;


// Reference or non-primitive data types
// Array, Objects, Functions

let heroes = ["spiderman", "shaktiman" , "naagraj"]

const myobj = 
{
    name : "priyanka",
    age : 30
}

const myFunc = function(){
    console.log("Hello world");
}

console.log(typeof score);
console.log(typeof scorevalue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof bigNumber);
console.log(typeof userName);
console.log(typeof id);
console.log(typeof myFunc);


//++++++++++++++++++++++++++++++++++++++++++++++++++

// stack and heap memory
// Stack memory is used in primitive data types
// heap memory is used in non-primitive data types