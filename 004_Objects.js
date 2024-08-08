// Objects are non premivite data type

const person ={
    name: "Abhijit Das",
    age:24,
    college:"Techno India",
    address:"chandrakona",
}

// console.log(person["name"])     // another way
console.log(person.name)

// add a new property 
person.school= "jirat high school"
console.log(person)

// delete/ remove a property
delete person.college
console.log(person)