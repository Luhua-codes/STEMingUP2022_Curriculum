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
console.log(); //newline

//If more than one parameter needed, declare an in-line function:
drinks.forEach(function (myDrink, index){
    // forEach can call function and provide up to 3 arguments: current item, current index, and the array.
    // Here, only the current item (myDrink) and the current index (index) are being used.
    console.log(`Took a sip of ${myDrink}. ${index + 1} sips taken in total.`); //+1 to index because indexing starts from 0
});