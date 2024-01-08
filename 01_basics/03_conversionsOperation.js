let score = "33abc" ;
let valueinNum = Number(score)
console.log(typeof(valueinNum));
console.log(valueinNum);
/* though js convert our string to a number but we have to thoroughly check
the value cuz it could be a Nan(not a number) */

// ***************** OPERATIONS ******************* //
console.log("1" + "2" + 3);// output = 123
console.log(1 + 2 + "3") // output = 33
//whatever the first data type, the operation will 
//POSTFIX
 let x = 4;
 let y = x++;
 console.log("x is",x);//OUTPUT = 5,incremental is done after evaluation
 console.log("y is",y);//OUTPUT = 4

//PREFIX
 let a = 4;
 let b = ++a;
 console.log("a is",a);//OUTPUT = 5,INCREMENTAL is done earlier
 console.log("b is",b);//OUTPUT = 5
