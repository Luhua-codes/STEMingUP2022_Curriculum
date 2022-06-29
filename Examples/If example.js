let age = 10;

//if structure
if(age < 0)
    console.log("Invalid");
else if(age <= 1) {
    console.log("Baby");
    console.log("Your ticket is free!");
}else if(age < 4) {
    console.log("Toddler");
    console.log("You get a toddler discount!");
}else if(age < 10) {
    console.log("Child"); //one line of code to execute, brackets optional
}else if(age < 13)
    console.log("Tween"); //one line of code to execute, brackets optional
else if(age < 18)
    console.log("Teenager");
else if(age < 55)
    console.log("Adult");
else {
    console.log("Senior");
    console.log("You get a senior's discount!")
}

//ternary operators version
age = 60;
let output = age < 0 ? "Invalid" : age <= 1 ? "Baby\nYour ticket is free!" : age < 4 ? "Toddler\nYou get a toddler discount!" : age < 10 ? "Child" : age < 13 ? "Tween" : age < 18 ? "Teenager" : age < 55 ? "Adult" : "Senior\nYou get a senior's discount!";
console.log(output);

//switch case (only checking specific values)
age = 5;
switch (age){
    case 0:
        console.log("Just born");
        break; //exits the switch structure since a case was executed
    case 1:
        console.log("Baby");
        break;
    case 2, 3: //multiple values can have the same outcome
        console.log("Toddler");
        break;
    case 4:
    case 5:
        console.log("5 years old");
    case 6: //multiple values can also be cased like this, by leaving out the break statement
        console.log("Child");
        break;
}