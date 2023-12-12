
// https://regexr.com/ => for more exploring..


const regex = /very/g       // g for Globally change very to VERY..
const text = "Ravi is a very very nice awesome nice very boy"
console.log(text.replace(regex , "VERY"))          // Change all small very to capital VERY

