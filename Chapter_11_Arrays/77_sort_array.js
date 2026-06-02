let fruits = ["Bannana", "Apple", "Orange", "Kiwi"]
fruits.sort();
console.log( fruits );

let numbers = [3, 7, 1, 9, 2, 4, 10];
numbers.sort();
console.log( numbers );

let num = [10, 1, 20, 2];
num.sort();
console.log( num );

//Natural Sorting , lexicpgraphic Sorting)

num.sort( ( a, b ) => a - b ); // Ascending order
console.log( num );

num.sort( ( a, b ) => b - a ); // Decending order
console.log( num );

