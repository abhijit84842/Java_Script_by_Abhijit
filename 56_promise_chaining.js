// create first promise
let p1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("resolved after 5 seconds")
        resolve(50)
    },5000)
})

// promise chining...(create a new new prommise in .then())
p1.then((value)=>{
    console.log(value)      // print the first promise resolve value 

    // create the promise 2 within .then()
    let p2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("promise 2 done..")
        },3000)
    })
    return p2  // it will return promise 2


}).then((value)=>{
    console.log(value)

    return 2 // return a constant value ..
}).then((value)=>{
    console.log(value)
    console.log("we are successfully Done! ")
})
