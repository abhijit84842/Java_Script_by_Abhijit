// localStorage => localStorage is a web storage object which are not sent to the server with each request . This data servives a full page refresh and even a full browser restart.


let key = prompt("Enter the key you want to set : ")
let value = prompt("Enter the value you want to set: ")

localStorage.setItem(key,value)    // to set the key value in localstorage

if(key == "red" || key == "blue"){
  localStorage.removeItem(key)      // remove the items from localstorage
}

console.log(`The value at ${key} is ${localStorage.getItem(key)}`)

// clear method
if(key == "clear"){
  localStorage.clear()
}


// key(index) => get the key on a given position..
localStorage.key(0)


// json.stringify(object) => convert  javascript object to json strings
// json.parse(string) => converts string into a javascript object (must be a valid json format)

