// Base64 Means = > (A-Z) + (a-z) + (0-9) + (+) +(/) addc togather this format and create a encoded string
// btoa() => Convert the main string in base64 encoded str
const str= "H i am base64 string"


const base64= btoa(str)
console.log(base64)     // OUTPUT => SCBpIGFtIGJhc2U2NCBzdHJpbmc=