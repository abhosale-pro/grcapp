const name = "hitesh   ";
const repoCount = 50;

console.log(name + repoCount + " Value");

console.log(`Hello ${name} and my repo count is ${repoCount}`); //string intrapolation

const gameName = new String("hiteshName");

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.toUpperCase());
console.log(gameName.length);
console.log(gameName.charAt(1));
console.log(gameName.indexOf("i"));
console.log(gameName.substring(0, 4)); //ignores ngative

// console.log(gameName.slice(-8, 4)); // takes negative arguments

console.log(gameName.trim());

const url = "https://hitesh.com/hitesh";

url.replace("hitesh", "-");
console.log(url.replace("hitesh", "-"));
console.log(url.includes("hitesh"));

newName = "atul-yuvi-trupti";
console.log(newName.split("-")); // converts to array


