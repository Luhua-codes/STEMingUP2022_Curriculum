//Q1
const person = {
    firstName: "Alice",
    lastName: "Smith",
    age: 20,
    location: "Toronto, Canada",
    print: function (){
        return `${this.firstName} ${this.lastName} is ${this.age} years old and is located in ${this.location}.`
    }
};

console.log(person.print());