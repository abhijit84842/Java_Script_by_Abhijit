 let a =()=>{
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve(456)
        },4000)
     })

 } 

 /*
 let f = async()=>{
    let b = await a()
    console.log(b)

    let c = await a()
    console.log(c)

    let d = await a()
    console.log(d)
 }

 f()      // call the f async function

 */


 // IIFE => Immediately Invoked Function Expression .
 (async()=>{
    let b = await a()
    console.log(b)

    let c = await a()
    console.log(c)

    let d = await a()
    console.log(d)
 })()       // CALL 