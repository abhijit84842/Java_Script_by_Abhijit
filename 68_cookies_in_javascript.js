console.log(document.cookie)
// create the cookie...
document.cookie = "name = Abhijit Das"
document.cookie ="user_id =abhijit721201 "
document.cookie ="email =abhijit721201gmail.com"
document.cookie = "name = Coder Bhai"  // update the name

// encoding the cookie..
let key = prompt("Enter the Key : ")
let value = prompt("Enter the value : ")

document.cookie =`${encodeURIComponent(key)} = ${encodeURIComponent(value)}`

console.log(document.cookie)