//Q1
let groceryList = ["rice", "tea", "cheese", "soy sauce", "tomato sauce"];
let numItems = groceryList.length;

console.log(`Please buy ${numItems} items from the grocery store.`);
console.log(`Prioritize buying ${groceryList[numItems - 1]} and ${groceryList[numItems - 2]}.\n`);

//Q2
groceryList[1] = "milk";
groceryList.push("eggs");
groceryList.forEach(item => console.log(`Please buy ${item}.`));

//Q3
console.log(`\n${groceryList.slice(1, 4).join(", ")} are on sale.`);

//Q4
console.log(`\nPlease buy ${groceryList.join(", ")}.`);

//Q4 challenge
let items = groceryList.join(", ");
let lastItemLen = groceryList[groceryList.length - 1].length;
items = items.slice(0, items.length - lastItemLen - 1) + " and" + items.slice(items.length - lastItemLen - 1);
console.log(`Please buy ${items}.`);

//Q5
console.log(`\n${groceryList.shift()} was bought.`);
console.log(`${groceryList.pop()} was bought.`);
console.log(`${groceryList.splice(2, 1)} was bought.`);

//Q6
let milkIndex = groceryList.indexOf("milk");
console.log(milkIndex > -1 ? "\nStill need to buy milk." : "\nAlready have milk.");

//Q6 challenge
groceryList.splice(milkIndex, 1); //remove my lowercase element of "milk"
groceryList.push("MILK"); //add all uppercase element of "MILK" to test case insensitivity

let inList = false;
groceryList.forEach(item => {
    if(item.toLowerCase() === "milk") {
        inList = true;
    }
});
console.log(inList ? "Still need to buy milk." : "Already have milk.");

//Q7
console.log(); //newline
groceryList.forEach(function (item, index){
    console.log(`${index + 1}. ${item}`);
});

//Q7 challenge
console.log(); //newline
let thisItem;
groceryList.forEach(function (item, index){
    thisItem = item[0].toUpperCase() + item.toLowerCase().substring(1);
    /*  thisItem = item[0].toUpperCase() + item.toLowerCase().slice(1); //same effect as previous line
    *   substring not covered in curriculum, can use slice to the same effect
    *   difference between slice and substring: https://stackoverflow.com/questions/2243824/what-is-the-difference-between-string-slice-and-string-substring
    */
    console.log(`${index + 1}. ${thisItem}`);
});