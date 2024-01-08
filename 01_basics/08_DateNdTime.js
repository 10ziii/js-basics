// ***************** DATE AND TIME ******************* //
let myDate = new Date();
// console.log(myDate.getMonth())
// console.log(myDate.getDay())
// console.log(myDate.getDate())

//console.log(myDate);
//console.log(myDate.toString())
//console.log(myDate.toDateString())
//console.log(myDate.toISOString())
console.log(myDate.toLocaleString("default",
    {
        weekday: "narrow",
    }))
//console.log(myDate.toLocaleDateString())
//console.log(myDate.toTimeString);

// const createDate = new Date(2023,0,23)
// console.log(createDate.toDateString());

// const createDate = new Date(2023,0,23,5,3)
// console.log(createDate.toLocaleString());

const createDate = new Date("2023-01-23")
//console.log(createDate.toDateString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp)
//  console.log(createDate.getTime()/1000)

