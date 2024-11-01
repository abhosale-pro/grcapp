//Drawing Software : excalidraw.com

//Stack(primitive) we get copy, Heap(nonprimitive) we get reference

let myYoutubeName = "atulbhosale";
let anothernameName = myYoutubeName;

anothernameName = "trutpi";
console.log(myYoutubeName); //atul
console.log(anothernameName); //trupti


//Heap : nonprimitive 
let userOne = {
  email: "a@abc.com",
};

let userTwo = {
  email: "b@bc.com",
};

userOne.email = "c@d.com";
userTwo.email = "c@d.com";

console.log(userOne);
console.log(userTwo);
