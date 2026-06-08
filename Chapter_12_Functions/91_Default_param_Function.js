function retry( testName, maxRetries, delay ) {
    console.log( `Retrying ${ testName } up To ${ maxRetries } times, ${ delay } ms` );
}

retry( "Login Test ", 3, 3000 );
retry( "Regression Test", 5, 2000 );