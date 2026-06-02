let statuses = ["Pass", "Fail", "Skip", "Server Issue"];
console.log( statuses[0] );
console.log( statuses[1] );

// (at) interface comes from reverse order

console.log( statuses.at( -1 ) ); // Server Issue
console.log( statuses.at( -2 ) ); // Skip
console.log( statuses.at( -3 ) ); // Fail
console.log( statuses.at( -4 ) ); // Pass
console.log( statuses.at( -5 ) ); //Undefined


// Modified 

statuses[3] = "Blocked";
console.log( statuses );
