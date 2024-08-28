let score = undefined;

console.log(typeof(score));

let valueInNumber = Number(score);

console.log(typeof(valueInNumber));
console.log(valueInNumber);

// "34" => easily converted to  number
// "34abc" => NaN(not a number) and type of nan is number
// "boolean value" => if true then o/p will be 1 and if false then o/p will be 0
// "string value" => it returns Nan
// if it is null then returns 0 value and typof returns object
// if it is undefined then returns Nan and typeof undefined returns undefined

let isLoggedIn = "";

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => converts in true , 0=> converts in false, 
//""=>converts in false, "string" => converts in true

let num = 56;
let stringNum = String(num);
console.log(typeof(stringNum));
