// Rest of the Param

function logResult( suiteName, ...results ) {
    console.log( suiteName );
    console.log( results );
}

logResult( 'Login Test', 1, 30, 50 );
logResult( 'Reg Test', 'Hello', 'Akshay' );