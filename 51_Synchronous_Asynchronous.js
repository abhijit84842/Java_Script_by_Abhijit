// Synchronous programming=> As the name suggests synchronous means to be in a sequence, i.e. every statement of the code gets executed one by one. So, basically a statement has to wait for the earlier statement to get executed.
/*
console.log("Hi")
console.log("I am Abhijit Das")
console.log("Its the javascript session")
*/


// Asynchronous Programming => it will not wait for earlier statement execution..it will executed after a specefic time.

console.log("Start")

setTimeout(()=>{
    console.log("This is Asynchronous program...")
}, 4000)
console.log("End")