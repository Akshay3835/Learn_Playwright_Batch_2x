let a = [1, 2];
let b = [3, 4]


// let c = a + b;
// console.log( c );

let c = a.concat( b );
console.log( c );

// spread (modren way) ..concatination

let d = [...a, ...b];
console.log( d )

// join 

let s = ["Pass", "Fail", "Skip"].join( " | " );
console.log( s );