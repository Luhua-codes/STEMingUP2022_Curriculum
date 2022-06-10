//Q1
let pointsScored = 18;
let totalPoints = 20;
let grade = pointsScored / totalPoints * 100;

console.log('Grade = ' + grade + '%');

//Q2
let tempC = 24, tempF = Math.round((tempC * 9/5) + 32);
console.log(tempC + " degrees Celsius is equal to " + tempF + ' degrees Fahrenheit.');

tempF = 62;
tempC = Math.round(5/9 * (tempF - 32));
console.log(tempF + ' degrees Fahrenheit is equal to ' + tempC + ' degrees Celsius.');

//Q3
grade = 100;

if(grade > 89) {
    if(grade > 97)
        console.log("A+");
    else if(grade < 93)
        console.log("A-");
    else
        console.log("A");
}else if(grade > 79) {
    if(grade > 85)
        console.log("B+");
    else if(grade < 83)
        console.log("B-");
    else
        console.log("B");
}else if(grade > 69) {
    if(grade > 75)
        console.log("C+");
    else if(grade < 73)
        console.log("C-");
    else
        console.log("C");
}else if(grade > 49)
    if(grade > 55)
        console.log("D+");
    else if(grade < 53)
        console.log("D-");
    else
        console.log("D");
else
    console.log("F");