// Checking Array

// Check if somthing IS an array

let result = Array.isArray( [1, 2, 3] );
console.log( result );

let results2 = Array.isArray( "a" );
console.log( results2 );


//every & some

[10, 80, 90].every( x => x >= 70 );
[20, 30, 50].every( y => y <= 50 );

// Playwright API
[200, 201, 202].every( statusCode => statusCode >= 200 );

// some - AT Least one element must Pass
[80, 60, 85].some( S => S < 70 );
[80, 90, 85].some( s => s < 70 );