// Function as Expression

const great = function ( name ) {
    return `Hello ${ name }`;
}

let r = great( "AkhsyKumar" );
console.log( r );



const square = function ( num ) {
    return num * num;
}
console.log( square( 5 ) );
console.log( square( 12 ) );



const multiply = function ( a, b ) {
    return a * b;
}
console.log( multiply( 6, 7 ) );



const isPositive = function ( num ) {
    return num > 0;
}
console.log( isPositive( 10 ) );
console.log( isPositive( -3 ) );

