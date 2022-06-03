//Q1
let pointsScored = 18;
let totalPoints = 20;
let grade = pointsScored / totalPoints * 100;

console.log('Grade = ' + grade + '%');

//Q2
let tempC = 24, tempF = Math.round((tempC * 9/5) + 32);
console.log(tempC + " degrees Celcius is equal to " + tempF + ' degrees Fahrenheit.');

tempF = 62;
tempC = Math.round(5/9 * (tempF - 32));
console.log(tempF + ' degrees Fahrenheit is equal to ' + tempC + ' degrees Celcius.');