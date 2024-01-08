// ******************* OBJECTS ********************* //

const sym = Symbol("key1")
const key1 = "key11"
const person = {
    [sym]:"key111",
    name:"tenziii",
    age:24,
    profile:"software developer",
    location:"california",
    key1:"value1"
}

console.log(person['name']);
console.log(person[sym])
console.log(typeof person[sym])
console.log([key1],person['key1'])
console.log(Object.keys(person))
console.log(person.hasOwnProperty("name"));

//to avoid making change to objects 
Object.freeze(person);

/* API is value that we get from backend earlier the data format for api was
xml, nowdays JSON is the data format for API  */