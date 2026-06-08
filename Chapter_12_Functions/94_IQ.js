// Returns a Value

function getstatus( code ) {
    if ( code >= 200 && code <= 300 ) return "success";
    if ( code >= 400 && code <= 500 ) return "Client error";
    if ( code >= 500 ) return "Server error";


}

getstatus( 200 );
getstatus( 404 );
getstatus( 502 );


function logTest( name ) {
    console.log( `Running ${ name }` );
}

let result = logTest( "Login" );
console.log( result );

sayHi( "Akshay" );

const sayHi = function ( name ) {
    return `Hi, ${ name }!`;
};
