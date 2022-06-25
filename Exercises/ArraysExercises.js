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