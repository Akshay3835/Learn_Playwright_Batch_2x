let scores = [45, 78, 98, 90];

// map transform every element, return a new arrays
let grades = scores.map( s => s <= 70 ? "Pass" : "Fail" );
console.log( grades );

//filters -keeps elements that passes a test 

let paasing = scores.filter( s => s > 70 );
console.log( paasing );

//reduce - accumulates to a single value

let total = scores.reduce( ( sum, s ) => sum + s, 0 );
console.log( total );

let nested = [[1, 2], [3, 4], [5, 6], [7, 8]]; // combine all arrays into one array
console.log( nested.flat() );
