let score = 100

if ( true ) {
    // TDZ zone comes under

    let score = 1200;
    console.log( score );
}

console.log( score );