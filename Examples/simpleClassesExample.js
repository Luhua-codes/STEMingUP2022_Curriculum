class Car{
    #registrationID; //private field
    constructor(make, year) {
        this.make = make;
        this.year = year;
        this.owner = undefined;
        this.#registrationID = Math.floor(Math.random() * 1000000);
    }

    age(){
        return (new Date).getFullYear() - this.year;
        //Date is a class built into JS.
        //I'm subtracting the current car instance's year from the real current year.
    }

    setOwner(owner){
        this.owner = owner;
    }

    getRegistrationID(){ //public method to get private field
        return this.#registrationID;
    }
}

let car0 = new Car("Ford", 2014);
console.log(car0); //print the object right after instantiation
console.log(`My car is ${car0.age()} years old.`); //use the age method

car0.setOwner("Alice"); //supply "Alice" as the owner and set that property using the setOwner method
console.log(car0);

console.log(`${car0.owner}'s ${car0.make} is registered under the ID ${car0.getRegistrationID()}`);