// Primitive call by value (copy of value from memory)
// 7 types : string, Number, Boolean, null, undefined, symbol = unique , BigInt
let userEmail; // undefined

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 3451232312312312312313n;

// Reference Type : (Non Primitive = call by reference = allocates reference in memory  )
//  Array , Objects, Functions
const heros = ["shaktimaan", "naagraj", "doga"];

let myObj = {
  name: "Hitesh",
  age: 22,
  class: "Science",
};

const myFunction = function () {
  console.log("HelloWorld");
};

console.log(typeof bigNumber);

let outsideTemp = null;

console.log(typeof outsideTemp); // Object
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction); 

// Dynamically type => const score = 100  the type is not explicitally no type is mentioned
