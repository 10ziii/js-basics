//  const user = {
//     username: "Tenzin",
//     price: 999,
//     welcomeMessage : ()=>{
//         console.log(`${this.username}, welcome to website`);
//        // console.log(this);
//     }
//  }

// user.welcomeMessage();
// user.username = "KARMA";
// user.welcomeMessage();
console.log(this);//this value in browser is a global window object but in node it refers to an empty object
// the value of this when inside a function has key values to it

const addNum = (num1,num2)=>(num1+num2);//implicit return
console.log(addNum(34,56));

const hello = ()=>(console.log("hello"));
hello();

//IIFE - Immediately invoked arrow functions, these type of syntax is used avoid getting populated from the global scope
(function hey(msg){
    console.log("hey");
    console.log(msg)
})("there");

(()=>(console.log("konichiwa")))();
