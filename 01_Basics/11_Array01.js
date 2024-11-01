//Decalareation

const myArr=[1,23,"atul",true]
const myHeros = new Array(1,2,3,4)


console.log(myArr[0])

//Shallow Copy - share the same reference values change in original

//Deep Copy - no share same reference (stack)

//Array Methods: 
myArr.push(6)
myArr.push(7)
console.log(myArr)
myArr.pop()
console.log(myArr)

myArr.unshift(0) // might affect performance
myArr.shift()
console.log(myArr)
console.log(myArr.includes(6))
console.log(myArr.indexOf(6))

let myArr3=myArr.join()
console.log(typeof(myArr3))

//Slice - doesnot manipulates original arr, Splice does

console.log("a",myArr)
const myn1 = myArr.slice(1,3)
console.log(myArr)
console.log("b",myn1)
const myn2 =myArr.splice(1,3)
console.log("original",myArr)
console.log("c",myn2)





