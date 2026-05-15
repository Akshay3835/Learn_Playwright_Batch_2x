const first_Name = "Akshay";
const lastname = "Kumar";

function printValue() {
    console.log( `Hello ${ first_Name } ${ lastname }` );
    var a = 20;
    console.log( a );
    if ( true ) {
        var a = 30;
        console.log( a );
    }
    console.log( "Final ->", a );
}

printValue();