const name = "priyanka";

const repoCount = 30;
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Priyanka-sh");
console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

console.log(gameName.indexOf("s"));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,6);
console.log(anotherString);

const str = "  Priyanka   ";
console.log(str.trim());
