// arrays
const myArr = [1,2,5,4,3,7,9]

// Array methods
myArr.push(10);
myArr.push(23);
myArr.pop(9);
myArr.unshift(11)
myArr.shift()
console.log(myArr.includes(11));
console.log(myArr.indexOf(7));
console.log(myArr);

const newArr = myArr.join();
console.log(newArr);

// slice & splice method

console.log("A" , myArr);

const myn1 = myArr.slice(2,5);
console.log(myn1);
console.log("B" , myArr);

const myn2 = myArr.splice(2,5);
console.log("C" , myArr);
console.log(myn2);




