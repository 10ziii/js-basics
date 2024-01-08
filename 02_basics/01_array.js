// ******************** ARRAY ****************** //
const array1 = ["toString","toPrecision","toFix","toLocaleString"];
console.log(array1);
// console.log(array1.length);
// console.log(array1[2]);
const array2 = new Array(10).fill(-1);
// console.log(array2);
// const newArray = array1.join();//convert our array into string
// console.log(newArray);
// console.log(typeof newArray);

const deleted = array1.splice(1,2,"item1");
console.log(array1)
console.log(deleted)
console.log(array1.slice(1,2))
console.log(array1)
//slice doesnot mutate our original array but splice do

const marvel = ["thor","ironman","hulk"];
const dc = ["superman","batman","flash"];
//const superheroes = marvel.concat(dc)
const superheroes = [...marvel,...dc];
// console.log(superheroes);
// console.log({..."abc"})

// const name="lucy";
// console.log(typeof name)
// console.log(Array.isArray(name))
// const name1 = Array.from(name)
// console.log(typeof name1)
// console.log(Array.isArray(name1))

