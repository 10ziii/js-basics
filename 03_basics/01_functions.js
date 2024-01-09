//FUNCTION DECLARATION
function js(){
    return ("javascript function declarations");
}
console.log(js());

// FUNCTION EXPRESSION
const js2 = function(){
    return "javascript function expressions"
}
console.log(js2());

//ARROW FUNCTIONS 
const js3 = ()=>{
    return "javascript arrow functions";
}
console.log(js3());

const array1 = ["alpha","beta"];
const array2 = ["gamma","delta"];
function concatenation(arr1,arr2){
    return arr1.concat(arr2);
}
const newArray = concatenation(array1,array2);
console.log(newArray);

function numbers(...c){
 
    console.log(c.length)
    let total = 0 ;
    for(let i=0;i<=c.length;i++){
        total+=i;
    }
    console.log(total);

}
numbers(1,2,3,4,5,6,7);

function addTwoNumbers(numb1,numb2){
    let result = numb1+numb2;
    return result;
}
const result=addTwoNumbers(4,5)