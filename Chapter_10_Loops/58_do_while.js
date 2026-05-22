let a = 10;

do {
    console.log( a );
    a++;
} while ( a < 10 );

let retry = 0;

do {
    console.log( "Execute the code!" );
    console.log( "Retrying .....", retry );
    retry++;
} while ( retry < 5 );
