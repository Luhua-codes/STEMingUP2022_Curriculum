//Q1
const person0 = {
    firstName: "Alice",
    lastName: "Smith",
    age: 20,
    location: "Toronto, Canada"
};

//Q2
const person1 = {firstName: "Bob", lastName: "Johnson", age: 25, location: "London, England"};

//Q3
let personToString = function (person) {
    return `${person.firstName} ${person.lastName} is ${person.age} years old and is located in ${person.location}.`
}
console.log(personToString(person0));
console.log(personToString(person1));

//Q4
let printPerson = function (person) {
    console.log(`${person.firstName} ${person.lastName} is ${person.age} years old and is located in ${person.location}.`);
} //students can directly replace the original function
printPerson(person0);
printPerson(person1);

//Q5
person0.middleName = "Christine";
printPerson = function (person) {
    if(Object.hasOwn(person,'middleName'))
        console.log(`${person.firstName} ${person.middleName} ${person.lastName} is ${person.age} years old and is located in ${person.location}.`);
    else
        console.log(`${person.firstName} ${person.lastName} is ${person.age} years old and is located in ${person.location}.`);
} //students can directly replace the original function
printPerson(person0);
printPerson(person1);

//Q6
delete person0.middleName;
printPerson(person0);