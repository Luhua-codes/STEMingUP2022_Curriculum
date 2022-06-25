const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(fruits);
fruits.splice(7, 0, "new fruit"); //indicated index out of bounds. Will not cause error, but will not have any effect on the array.

/*
* Values at the end: [ 'Banana', 'Orange', 'Lemon', 'Kiwi' ]
* 2 elements were deleted, starting at index 2, so "Apple" and "Mango" were removed
* New elements "Lemon" and "Kiwi" were inserted at index 2, where "Apple" used to be
*/