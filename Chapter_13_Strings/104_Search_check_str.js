// Searching and Checking

let url = "https://staging.vwo.com/api/login?retry=true";

// includes

console.log( url.includes( "staging" ) );
console.log( url.includes( "production" ) );

// StartsWith and EndsWith

console.log( url.startsWith( "https" ) );
console.log( url.startsWith( "staging" ) ); // false
console.log( url.endsWith( "true" ) );
console.log( url.endsWith( "login" ) ); //false

// indexOf and lastIndexOf
console.log( url.indexOf( "a" ) );
console.log( url.indexOf( "s" ) );
console.log( url.lastIndexOf( "a" ) );
console.log( url.indexOf( "nothere" ) );

// search
console.log( url.search( /login/ ) ); //regex
console.log( url.search( /vwo/ ) ); // starts where the first letter starts





