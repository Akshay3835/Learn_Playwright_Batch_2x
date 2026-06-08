function calculatePassrate( total, passed ) {
    return ( ( passed / total ) * 100 ).toFixed( 2 );
}

console.log( calculatePassrate( 10, 7 ) );


// Impure function

function isPassing( score ) {
    return score >= threshold;

}

let threshold = 70;
console.log( isPassing( threshold ) );


threshold = 50;
console.log( isPassing( threshold ) );