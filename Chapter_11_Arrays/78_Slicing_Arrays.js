// Slicing and Combining

let arr = [1, 2, 3, 4, 5];
// slice (start, end-1)

console.log( arr.slice( 1, 3 ) );

console.log( arr.slice( 2, 4 ) );

console.log( arr.slice( 2 ) );

console.log( arr.slice( -2 ) );

console.log( arr.slice( -1 ) );

console.log( arr.slice( 0 ) );

let array = [10, 20, 30, 40, 50];
let s = array.slice( 1, 4 );
console.log( array );
console.log( s );