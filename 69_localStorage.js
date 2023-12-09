let key = prompt("Enter the key you want to set : ")
let value = prompt("Enter the value you want to set: ")

localStorage.setItem(key,value)    // to set the ket value in localstorage

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


// json.stringify(object) => convert objects to json strings
// json.parse(string) => converts string to objects (must be a valid json format)

