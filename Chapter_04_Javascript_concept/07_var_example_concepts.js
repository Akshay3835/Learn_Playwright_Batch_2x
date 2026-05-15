var a = 10;

console.log( a );

function printValue() {
    var a = 20;
    console.log( a );
    if ( true ) {
        var a = 30;
        console.log( a );

    }   
    console.log( "print the A value :", a );
}

printValue();