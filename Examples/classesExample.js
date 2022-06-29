class Car{
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }

    age(){
        return (new Date).getFullYear() - this.year;
        //Date is a class built into JS.
        //I'm subtracting the current car instance's year from the real current year.
    }

    setOwner(owner){
        this.owner = owner;
    }
}

let car0 = new Car("Ford", 2014);
console.log(car0); //print the object right after instantiation
console.log(`My car is ${car0.age()} years old.`); //use the age method

car0.setOwner("Alice"); //supply "Alice" as the owner and set that property using the setOwner method
console.log(car0);