let a = 20;

let retryCount = 0;
retryCount = retryCount + 1;
retryCount = retryCount + 1;
retryCount = retryCount + 1;

console.log( "Retry turns", retryCount );

/*
let retryCount = 50;

SyntaxError: Identifier 'retryCount' has already been declared */

let testStatus = "pending";

if ( testStatus === "pending" ) {
    let executionTime = 1200;
    console.log( " Inside the Block", executionTime );

}