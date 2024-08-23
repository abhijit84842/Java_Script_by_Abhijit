// 1) Why we can change the const object value , where we already know that we can't update or re-declear const
// => because we know const prevent re-assignment or re-declear but objects works in reference and so , we can update the object value.

const Tech = {
    name :"JS"
}
Tech.name ="React"

console.log(Tech.name)      // Output => React
