// 1-epoch 1jan 1970 time = moment in ms
//Use Temporal api

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(myDate.toDateString())
console.log(myDate)

// let myCreatedDate = new Date(2023,0,23,5,4,23)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")

console.log(myCreatedDate.toLocaleString())
//Jan = 0

let myTimeStamp = Date.now()
let myTimeStamp2 = myCreatedDate.getTime()

console.log(myTimeStamp)
console.log(myTimeStamp2)
console.log(Math.floor(myTimeStamp/1000))

console.log(myCreatedDate.getDay())
console.log(myCreatedDate.getFullYear())
// String interpolation
console.log(`${myCreatedDate} and time is ${myTimeStamp}`) 


console.log(myCreatedDate.toLocaleDateString("default", {
    weekday:"long",
}))



