let str = "Login_Test_Pass_01";

//slice (strats/end) - negative index supported
console.log( str.slice( 0, 5 ) );
console.log( str.slice( 11 ) );

let testNumber = str.slice( -3 );
console.log( testNumber );

// substring (start,end) - no negative (tears as 0)
console.log( str.includes( "Pass" ) );
console.log( str.substring( 6, 10 ) );
console.log( str.substring( 11, 15 ) );


