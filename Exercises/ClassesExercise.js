class Person{
    #SIN;
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
        this.middleName = "";
        this.#SIN = Person.#generateSIN();
    }

    toString(){ //Q3
        if(this.middleName.length > 0)
            return `${this.firstName} ${this.middleName} ${this.lastName} is ${this.age} years old and is located in ${this.location}.`;
        else
            return `${this.firstName} ${this.lastName} is ${this.age} years old and is located in ${this.location}.`;
    }

    print(){ //Q4
        if(this.middleName.length > 0)
            console.log(`${this.firstName} ${this.middleName} ${this.lastName} is ${this.age} years old and is located in ${this.location}.`);
        else
            console.log(`${this.firstName} ${this.lastName} is ${this.age} years old and is located in ${this.location}.`);
    }

    static #generateSIN(){
        return Math.round(Math.random() * 100000);
    }

    getSin(){
        return this.#SIN;
    }
}
//Q1
const person0 = new Person("Alice", "Zelinska", 20, "London, England");

//Q2
const person1 = new Person("Bob", "Xavier", 57, "New York, USA");

//Q3
console.log(person0.toString());
console.log(person1.toString());
console.log();

//Q4
person0.print();
person1.print();
console.log();

//Q5
person0.middleName = "Zero";
person0.print();

//Q6
person0.middleName = "";
person0.print();
console.log();

//Q7
console.log(`${person0.toString()}'s Social Insurance Number is ${person0.getSin()}.`);
console.log(`${person1.toString()}'s Social Insurance Number is ${person1.getSin()}.`);