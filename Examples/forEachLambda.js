const drinks = ["coffee", "tea", "latte", "juice"];

//This:
drinks.forEach(sip);
function sip(myDrink){
    console.log("Took a sip of " + myDrink);
}

//Is the same as doing this:
drinks.forEach(myDrink => console.log("Took a sip of " + myDrink));