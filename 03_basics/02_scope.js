// ************************ SCOPE ************************** // 

/*let and const are block scope while var is function scope
function scope means our whole js file is main function hypothetically
A block is used to combine multiple statements onto one group 

Whatever the value present in global is easily accessed inside block but not vice versa with
let and const and if present both inside global and block then the val where it is being accessed gets the priority
in case of var the latter gets priority but we avoid such code
we avoid any leakage of value outside scope so using var inside of scope is totally
prohibited cuz it is easily accessed outside the scope*/


let a = 43;
const b = 78;
var c= 98;
console.log(a);
console.log(b);
console.log(c);

//Lexical scope is the ability for the function scope to access variables from the parent scope
a
var val = "pub";
if(true){
    var val = "hub";
    console.log(val);
}
console.log(val)

