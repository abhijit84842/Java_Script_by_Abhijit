// Example => 1

setTimeout(()=>{
    
    console.log("Hacking wifi ... please wait...")
},1000)

// handling the error...
try{
    console.log(rahul)
}
catch(err){
    console.log("one error occured pls soleve it ....")
}

setTimeout(()=>{
    
    console.log("Fetching username and password....please wait...")
},2000)

setTimeout(()=>{
    
    console.log("Hacking Rahul's facekbook id ...please wait...")
},4000)

setTimeout(()=>{
    
    console.log("Rahul's facekbook id hacked...")
},6000)

// Example 2 =>

    try{
        let divided = 10/0 
        console.log(divided)    // Output => Infinity
    }
    catch(err){
        console.log(err.name)
        console.log(err.message)
    }


