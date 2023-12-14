
// var = is global scope  , so we can access the variable out of the block.

{
    var b = 15;
}
console.log(b)      // Output => 15 (not throw an error)


// let = is block level scope , so we can't access the variable out of the block.
{
    let a = 18;
}
console.log(a)      // throw an error



//function scope
let p = 50;     // global variable
function ax(){
    let a1= 20;     // local variable
    console.log(a1)
    console.log(p)  // use can use global variable
}
ax()        // 20
            // 50
console.log(a1)   // throw error