// Increment and Decrement operator examples

console.log( "--- Prefix Increment (++x) ---" );
let a = 5;
console.log( "let a = 5" );
console.log( "++a:", ++a );  // 6 (increments first, then returns)
console.log( "a after:", a ); // 6

console.log( "" );
console.log( "--- Postfix Increment (x++) ---" );
let b = 5;
console.log( "let b = 5" );
console.log( "b++:", b++ );  // 5 (returns first, then increments)
console.log( "b after:", b ); // 6

console.log( "" );
console.log( "--- Prefix Decrement (--x) ---" );
let c = 5;
console.log( "let c = 5" );
console.log( "--c:", --c );  // 4 (decrements first, then returns)
console.log( "c after:", c ); // 4

console.log( "" );
console.log( "--- Postfix Decrement (x--) ---" );
let d = 5;
console.log( "let d = 5" );
console.log( "d--:", d-- );  // 5 (returns first, then decrements)
console.log( "d after:", d ); // 4

console.log( "" );
console.log( "--- Real-world: loop counter ---" );
for ( let i = 1; i <= 3; i++ ) {
    console.log( "Iteration:", i );
}

let A = 5;
console.log( A++ + ++A - --A + A-- + ++A );
console.log( A );