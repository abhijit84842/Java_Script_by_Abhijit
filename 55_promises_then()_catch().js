// resolve
let p1 = new Promise((resolve,reject)=>{
    console.log("your promises is pending...")
    setTimeout(()=>{
        console.log("i am a promises and i am fulfilled..")
        resolve(true)
    }, 5000)

})


// reject
let p2 = new Promise((resolve,reject)=>{
    console.log("your promises is pending...")
    setTimeout(()=>{
        console.log("i am a promises and i am rejected..")
        reject(new Error("rejected for error in code .."))
    }, 5000)

})


// To get the value..
p1.then((value)=>{              // then function return a new promise...
    console.log(value)
})
console.log(p1,p2)

// To catch the error...
p2.catch((error)=>{
    console.log("some error occurred in p2..")
})