// ******************** ARRAY ****************** //
const array1 = ["toString","toPrecision","toFix","toLocaleString"];
// console.log(array1);
// console.log(array1.length);
// console.log(array1[2]);
const array2 = new Array(10).fill(-1);
// console.log(array2);
// const newArray = array1.join();//converst our array into string
// console.log(newArray);
// console.log(typeof newArray);

const deleted = array1.splice(1,2,"item1");
console.log(array1)
console.log(deleted)
// array1.slice(1,2)
//slice doesnot mutate our original array but splice do