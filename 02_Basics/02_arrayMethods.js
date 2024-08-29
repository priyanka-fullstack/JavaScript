const marvel_heros = ["thor","ironMan","spiderMan"]
const dc_heros = ["superman","flash", "batman"]

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

const all_new_heros = [...marvel_heros , ...dc_heros]
console.log(all_new_heros);

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
let real_another_array = anotherArr.flat(Infinity);
console.log(real_another_array);

