// FOR LOOP
// let num = 10;
// for(let i = 0; i<=num;i++){
//     if(i===5){
//         console.log("detected 5")
//         continue;
//     }
//     console.log(i);
// }


// WHILE DO WHILE LOOP 
// let number = 100;
// let total = 0;
// let i = 0;
// while(i<=100){
//     total+=i;
//     i++;
// }
// console.log(total);

// do-while
// let number = 100;
// // let total = 0;
// let i = 1;
// do{
//     // total+=i;
//     console.log(i)
//     i++;
// }while((i<=100))
// console.log(total);

for(let i=1;i<=10;i++){
    console.log(`Multiplication table of ${i}`);
    for(let j=1;j<=10;j++){
        //console.log(`value of j is ${j} and value of i is ${i}`);
        console.log(`${i} * ${j} = ${i*j}`);
    }
}