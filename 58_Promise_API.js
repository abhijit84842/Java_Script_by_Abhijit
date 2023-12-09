let p1 = new Promise((resolve, reject)=>{

  setTimeout(()=>{
    //resolve("value 1")
    reject(new Error("An error occured"))
  },2000)
})



let p2 = new Promise((resolve, reject)=>{

  setTimeout(()=>{
    resolve("value 2")
  },4000)
})



let p3 = new Promise((resolve, reject)=>{

  setTimeout(()=>{
    resolve("value 3")
  },6000)
})



// show the all promise after resolve at a time...
// promise.all()
let promise_all = Promise.all([p1,p2,p3])  // it will return all the promises if all the promises are resolved.
promise_all.then((value)=>{
  console.log(value)
})






// Promise.allSettled()
let promise_allSettled = Promise.allSettled([p1,p2,p3])  // it will return all the promises if one promise is Rejected , it will show the status of promise...
promise_allSettled.then((value)=>{
  console.log(value)
})






// Promise.race()
let promise_race = Promise.race([p1,p2,p3])  // which promises is first resolved ...it will return that..
promise_race.then((value)=>{
  console.log(value)
})


// Promise.any() => wait for the first promise to fullfill(not rejected) , and its result becomes the outcome.throws Aggregate Error if all the promises are rejected.
let promise_any = Promise.any([p1,p2,p3])  
promise_any.then((value)=>{
  console.log(value)
})

