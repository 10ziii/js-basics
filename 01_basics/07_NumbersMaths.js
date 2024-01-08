// ****************** NUMBERS ******************//
const score = 8;
console.log(score,typeof score);
console.log(score.__proto__);
console.log(score.toFixed(2));

const balance =  new Number(768);
console.log(balance,typeof balance);
console.log(balance.__proto__);

console.log(balance.toString().length);
console.log(typeof balance);

const numm = 123.65;
console.log(numm.toPrecision(3));

const number = 1000000;
console.log(number.toLocaleString('en-IN'));

// ********************* MATHS ***********************//
/* Maths library comes in default with js */

console.log(Math.round(43.4));
console.log(Math.abs(-34));
console.log(Math.ceil(4.2));
console.log(Math.floor(3.4));
console.log(Math.sqrt(45));
console.log(Math.floor(Math.random()*100)+1);
 /* Math.random() gives us value bw 0 and 1 and to get value till 100,
 we multiply it Math.random with 100, and to avoid decimal values we use 
 Math.floor() which removes decimal but in turn choose the number lower, and if suppose 
 Math.floor(0.222) then it gives 0 which we dont want so we add + 1  
 Now suppose if we have to choose bw two min and max value, then we have to create 
 our own formula*/

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min+1)+min))