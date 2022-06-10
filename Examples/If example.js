let age = 10;

if(age <= 1) {
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