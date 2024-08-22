var message ="Good Morning 1"   //global scope

function hello(){
  let message="Good Morning 2"  // local scope
  {
    let message= "Good Morning 3"   // block scope
    console.log(message)      

  }
  let c =()=>{
    console.log(`hello ${message}`)
  }
  return c
}

let a1 =hello()
console.log(a1)
