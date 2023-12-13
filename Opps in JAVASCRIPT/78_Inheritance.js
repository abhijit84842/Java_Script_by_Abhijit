class Animal{
    constructor(name , color){
        this.name=name
        this.color=color
    }
    run(){
        console.log(this.name + " is running ")
    }
    shout(){
        console.log(this.name + " is shouting ")
    }
       
}

class Monkey extends Animal{
    eatBanana(){
        console.log(this.name + " is Eating banana..")
    }
}

let a = new Monkey("indian Monkey"  , "Brown")      
a.eatBanana()
a.run()
a.shout()
