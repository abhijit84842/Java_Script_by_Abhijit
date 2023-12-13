class Animal{
    constructor(name){
        this._name=name
    }
    fly(){
        console.log(this._name + " are flying..")
    }
    get getName(){         // get
        return this._name
    }

    set setName(newName){
        this._name=newName
    }

}

class Rabbit extends Animal{
    eat(){
        console.log("Eating Carrot...")
    }
}

let birdObject = new Animal("Dove")

let rabi = new Rabbit()     // create a sub class object 

birdObject.fly()
console.log(birdObject.getName)        //Get the name of bird..

birdObject.setName = "PEACOCK"      // Set the name of bird

console.log(birdObject.getName)         //get the name of bird..
birdObject.fly()

//let C =55 // not a object of Animal class..


// instanceof Operator => The instanceof operator allows to check whether an object belongs to a certain class.
console.log(birdObject instanceof Animal)        // it return boolean (True)

console.log(birdObject instanceof Rabbit)  // False

console.log(rabi instanceof Rabbit)     // True

//console.log(c instanceof Animal)    // False