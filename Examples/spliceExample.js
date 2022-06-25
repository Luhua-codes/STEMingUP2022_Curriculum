const fruits = ["Banana", "Orange", "Apple", "Mango"];

//will automatically insert "new fruit" at the next array index, instead of leaving undefined holes:
fruits.splice(7, 0, "new fruit"); //"new fruit" will be at index 4

//insert at index 2 and remove 2 elements
fruits.splice(2, 2, "Lemon", "Kiwi");

console.log(fruits);

/*
* Values at the end: [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'new fruit' ]
* "new fruit" was added at index 4
* 2 elements were deleted, starting at index 2, so "Apple" and "Mango" were removed
* New elements "Lemon" and "Kiwi" were inserted at index 2, after "Orange" and before "new fruit"
*/

fruits.splice(1, 2); //delete "Orange" and "Lemon" without leaving undefined holes
console.log(fruits);

//remaining elements: [ 'Banana', 'Kiwi', 'new fruit' ]