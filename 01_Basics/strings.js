// const name = "priyanka";

// const repoCount = 30;
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// const gameName = new String("Priyanka-sh");
// console.log(gameName[0]);

// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));

// console.log(gameName.indexOf("s"));

// const newString = gameName.substring(0,4);
// console.log(newString);

// const anotherString = gameName.slice(-8,6);
// console.log(anotherString);

// const str = "  Priyanka   ";
// console.log(str.trim());

//concat method
// const str1 = "Hello";
// const str2 = "World";
// console.log(str1.concat(' ' , str2));

// endswith method
// const str = "cats are the best";
// console.log(str.endsWith("best")); 

// includes method
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox'
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} 
    in the sentence`);

// indexOf method
const paragraph = "I think Ruth's dog is cuter than your dog!";
const serachTerm = "dog";
const indexOfFirst = paragraph.indexOf(serachTerm);
console.log(`The index of the first ${serachTerm} is ${indexOfFirst}`);

const str = 'The quick brown fox jumps over the lazy dog.';
console.log(str.slice(-7));