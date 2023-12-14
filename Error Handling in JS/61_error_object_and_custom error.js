/* The arror Object => For all the bulit in errors, the error object two main properties:
    name and message
*/


try{


    Abhijit

}
catch(error){
    console.log(error.name)     // Output => ReferenceError
    console.log(error.message)  // Output => Abhijit is not defined
} 


// Create Customs Error ..
try{
    //console.log(A2)
    throw new ReferenceError("10 is not divided by 0")
}
catch(err){
    console.log(err.name)   // ReferenceError
    console.log(err.message)        // 10 is not divided by 0
    //console.log(err.stack)
}


