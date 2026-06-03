// Function as Expression

const great = function ( name ) {
    return `Hello ${ name }`;
}

let r = great( "AkhsyKumar" );
console.log( r );


// Arrow Function 

const great2 = ( Name ) => " Helooo " + Name;
let r2 = great2( " Akshay Kumar " );
console.log( r2 );


const doubleIt = n => n * 2;
let r3 = doubleIt( 35 );
console.log( r3 );