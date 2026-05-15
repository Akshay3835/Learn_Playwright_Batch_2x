var a = 10;
let b = 20;
const c = 3.14;

console.log( a + " " + "this varaiable of a" );
console.log( b + " " + "this is tyhe value of let" );
console.log( c + " " + "this is the value of const" );

var browser = "chrome";
var browser = "firefox"; //redeclaration allowed
browser = "safari"; //reassigned allowed

//for,function

var testcases = ["login", "logout", "signup"];

for ( var i = 0; i < testcases.length; i++ ) {
    console.log( "Running test :", testcases[i] )
}

console.log( "Loop counter leaked outside", i );


