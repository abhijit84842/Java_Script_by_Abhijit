class Animal{
    constructor(name){
        this.name=Animal.setCapitalize(name)
    }
    run(){
        console.log(this.name + " is running ..")
    }
    static setCapitalize(name){ 
        return name.charAt(0).toUpperCase() + name.substr(1, name.length)
    }
}

// let a = new Animal(Animal.setCapitalize("tiger"))
let a = new Animal("tiger")
a.run()