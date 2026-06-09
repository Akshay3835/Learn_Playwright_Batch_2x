let str = " Hello, Akshay kumar! welocome back";

// uppercase and lowercase

console.log( str.toUpperCase() );
console.log( str.toLowerCase() );
console.log( str.toLocaleUpperCase() );
console.log( str.toWellFormed() );

// trim

console.log( str.trim() );
console.log( str.trimStart() );
console.log( str.trimEnd() );

// Replace

let msg = " Test: FAIL. Retry: FAIL.";
console.log( msg.replace( "FAIL", "PASS" ) );
console.log( msg.replaceAll( "FAIL", "PASS" ) );

// Concatenation

console.log( "Hello" + "" + "world!" );
console.log( "Hello".concat( "Akshay!" ) );
console.log( `${ "Hello" } ${ "AkshayKumar" }` );

let url = "http://app.vwo.com?app=akshay";
console.log( url.replace( / app /, "QA" ) );

let r = "pass,fail,skip".split( "," );
console.log( r );

let rr = " test_login_pass ".split( "_" ).join( " " );
console.log( rr );

let ss = ["2026", "06", "09"]
let date = ss.join( "/" );
console.log( date );

// joins will work only for array type  

let name = [" Akshay", "Kumar"];
let latsname = name.join( "._." );
console.log( latsname );

