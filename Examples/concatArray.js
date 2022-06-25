const drinks = ["coffee", "tea", "latte", "juice"];
const snacks = ["sandwiches", "granola bars"];
const desserts = ["ice cream", 'cookies', "chocolate"];

const menu = drinks.concat(snacks, desserts);
const food = snacks.concat(desserts);
let drinks1 = drinks.concat("new drink");
drinks1 = drinks1.concat(1);

console.log(`menu: ${menu.join(", ")}`);
console.log(`food: ${food.join(", ")}`);
console.log(`drinks1: ${drinks1.join(", ")}`);

/*
* Output:
*   menu: coffee, tea, latte, juice, sandwiches, granola bars, ice cream, cookies, chocolate
*   food: sandwiches, granola bars, ice cream, cookies, chocolate
*   drinks1: coffee, tea, latte, juice, new drink, 1
*/