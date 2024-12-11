// promises is used to run the code parallel exicution..

let promises =new Promise(function(resolve,reject){
    alert("hi promises")
    resolve(56)
})




console.log("hello No 1")
setTimeout(function(){
    console.log("hello 2 in 4 second")
},4000)

console.log("My name is " + "Abhijit Das ")

// call the promises 
console.log(promises)

// Notes : -> There are 3 states in promises => 1) pending 2)fullfiled 3) rejected