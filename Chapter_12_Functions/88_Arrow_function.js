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

function add( a, b ) {
    return a + b;
}

const add2 = ( a, b ) => a + b;


function say() {
    console.log( "Hello AkshayKumar " );

}

const say1 = () => 'Hi, Hello';
const say2 = () => console.log( "Hello Sir" );


const greet = ( name ) => {
    const message = "Hi " + name;
    return message;
}