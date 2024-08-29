//dates

let myDate = new Date();

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2024 , 3, 23);
// let myCreatedDate = new Date(2024 , 3, 23,9,5);
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toDateString());
let myCreatedDate = new Date("2024-01-23");
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myCreatedDate.getTime());