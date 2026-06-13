let testMatrix = [
    ["Login", "Pass", 200],
    ["checkOut", "Fail", 404],
    ["search", "Pass", 180]
];

// How many test cases are we executed?
// How many test cases are Passed?
// What is the status code that you have got for the fail?

for ( let i = 0; i < testMatrix.length; i++ ) {
    for ( let j = 0; j < testMatrix[i].length; j++ ) {
        console.log( testMatrix[i][j] );
    }
    console.log( " " );

}

// Second Method / Approch

for ( let row of testMatrix ) {
    for ( let cell of row ) {
        process.stdout.write( cell + " " );
    }
    console.log( " " );

}

console.log("---------------");


// forEach method

testMatrix.forEach( row => {
    row.forEach( cell => process.stdout.write( cell + " " ) );
    console.log( " " );

} );
