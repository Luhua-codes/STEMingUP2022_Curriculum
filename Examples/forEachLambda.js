const drinks = ["coffee", "tea", "latte", "juice"];

//This:
function sip(myDrink){
    console.log(`Took a sip of ${myDrink}.`);
}

drinks.forEach(sip);
console.log(); //newline

//Is the same as doing this:
drinks.forEach(myDrink => console.log(`Took a sip of ${myDrink}.`));
console.log(); //newline

//If lambda function is more than one line, use curly brackets:
let totalSips = 0;
drinks.forEach(myDrink => {
    totalSips++;
    console.log(`Took a sip of ${myDrink}. ${totalSips} sips taken in total.`);
});