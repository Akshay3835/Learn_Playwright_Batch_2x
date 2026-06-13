let scores = [
    [20, 30, 40],
    [50, 60, 70],
    [80, 90, 100]
];

// get the sum of the rows - using map and reduce function

let rowSums = scores.map( row => row.reduce( ( a, b ) => a + b, 0 ) );
console.log( rowSums );

let suiteResults = [
    ["login-pass", "register-pass", "logout-pass"],
    ["search-pass", "filter-fail", " sort-pass"],
    ["checkout-fail", "payment-fail", "confirm-pass"]
];

// I want all the test cases which have failed

for ( let i = 0; i < suiteResults.length; i++ ) {
    for ( let j = 0; j < suiteResults[i].length; j++ ) {
        if ( suiteResults[i][j].includes( "fail" ) ) {
            console.log( suiteResults[i][j] );

        }
    }
}
