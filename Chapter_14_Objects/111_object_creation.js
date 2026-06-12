let c = { Status: "Pass" };
let d = { Status: "Pass" }

console.log( c );
console.log( d );

if ( c === d ) {
    console.log( "true" );

}
else {
    console.log( "false" );

}

let a = { status: "Pass" };
let b = a;
b.status = "Fail";
console.log( a.status );
console.log( b["status"] );

if ( b === a ) {
    console.log( "true" );

}
else {
    console.log( "false" );

}