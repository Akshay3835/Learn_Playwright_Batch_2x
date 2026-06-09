// Single quotes

let a = 'hello';

// Double quotes

let b = "world";


let name = " Akshay ";
let msg = `Hello, ${ name }! 2+2 = ${ 2 + 2 }`;
console.log( msg );

// Multiline

let report = `
Test: login
Status: Pass
Duration: 320ms`;

console.log( report );

console.log( "--------------" )

console.log( String( 202 ) );
console.log( String( true ) );
console.log( String( null ) );
console.log( String( [1, 2] ) );