// what is prototype=> Prototypes are the mechanism by which JavaScript objects inherit features from one another.

let a ={
    name1: "Abhijit",
    language:"JavaScript"
}
console.log(a)

let p={
   run : ()=>{
    alert("run")
   }
}

// prototype of prototype
p.__proto__ ={
    name2: "Rintu Das"
}

a.__proto__=p       // now p is proto of a SO, we can inherite p
a.run() 

console.log(a.name2)
