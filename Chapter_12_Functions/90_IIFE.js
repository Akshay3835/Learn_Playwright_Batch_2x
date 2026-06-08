// Basic IIFE
( function () {
    console.log( "Hi" );
} )();

// IIFE with arrow function
(() => {
    console.log( "Hello from arrow IIFE" );
})();

// IIFE with parameters
(function (name) {
    console.log( "Hello, " + name );
})( "Akshay" );

// IIFE returning a value
const result = (function (a, b) {
    return a + b;
})( 10, 20 );
console.log( "Sum:", result );

// IIFE for private scope (avoid polluting global namespace)
const counter = (function () {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
})();
console.log( counter.increment() );
console.log( counter.increment() );
console.log( counter.decrement() );
console.log( "Private count:", counter.getCount() );