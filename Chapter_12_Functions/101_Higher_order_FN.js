function runWithLogin( testFN, testName ) {
    console.log( `Stagging: ${ testName }` );
    let result = testFN();
    console.log( `Finished: ${ testName } -> ${ result }` );
    return result;
}

function loginTest() {
    return 'Pass';

}

function loginTEstFailed() {
    return "Fail";
}


runWithLogin( loginTest, "login Test" );
runWithLogin( loginTEstFailed, " Dashboard Failed test" );