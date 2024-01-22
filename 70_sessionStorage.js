// sessionStorage => used less often localStorage. properties and methods are same as localStorage but .. 1) The session Storage exists only within the current browser tab .Another tab with same page will have adifferent storage.       2) The data survives page refresh , but not closing / opening the  tab.

let key =prompt("Enter the key : ")
let value =prompt("Enter the value : ")

sessionStorage.setItem(key , value)