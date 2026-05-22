// --- Example 1: Check if a number is Even or Odd ---
let num = prompt( "Enter a number:" );
num = Number( num );

if ( num % 2 === 0 ) {
    console.log( num + " is Even" );
} else {
    console.log( num + " is Odd" );
}


// --- Example 2: Greet the user ---
let name = prompt( "What is your name?" );
console.log( "Hello, " + name + "! Welcome to JavaScript." );


// --- Example 3: Simple addition ---
let a = prompt( "Enter first number:" );
let b = prompt( "Enter second number:" );
a = Number( a );
b = Number( b );
console.log( a + " + " + b + " = " + ( a + b ) );


// --- Example 4: Confirm dialog ---
let likesJS = confirm( "Do you like JavaScript?" );
if ( likesJS ) {
    console.log( "Great! Let's learn more." );
} else {
    console.log( "Oh, you will love it soon!" );
}


// --- Example 5: Age validation ---
let age = prompt( "Enter your age:" );
age = Number( age );

if ( age >= 18 ) {
    console.log( "You are an adult." );
} else {
    console.log( "You are a minor." );
}