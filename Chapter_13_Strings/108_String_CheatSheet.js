// =============================================
//  JAVASCRIPT STRING METHODS — Interview CheatSheet
// =============================================

let str = "  Hello, JavaScript!  ";

// ----- 1. ACCESS CHARACTERS -----

console.log( str[0] );                 // " "
console.log( str.at( -1 ) );           // " " (last char)
console.log( str.charAt( 6 ) );        // "o"
console.log( str.charCodeAt( 6 ) );    // 111  (ASCII/Unicode value)

// ----- 2. SEARCH & CHECK -----

console.log( str.includes( "Java" ) );     // true
console.log( str.startsWith( "  He" ) );   // true
console.log( str.endsWith( "!  " ) );      // true
console.log( str.indexOf( "o" ) );         // 7
console.log( str.lastIndexOf( "o" ) );     // 7
console.log( str.search( /Java/ ) );       // 8  (regex supported)

// ----- 3. EXTRACT SUBSTRINGS -----

console.log( str.slice( 2, 7 ) );          // "Hello"   (start, end)
console.log( str.slice( -3 ) );            // "!  "     (negative works)
console.log( str.substring( 2, 7 ) );      // "Hello"   (start, end — no negative)
console.log( str.substr( 2, 5 ) );         // "Hello"   (start, length — legacy)

// ----- 4. TRANSFORM -----

console.log( str.toUpperCase() );          // "  HELLO, JAVASCRIPT!  "
console.log( str.toLowerCase() );          // "  hello, javascript!  "
console.log( str.trim() );                 // "Hello, JavaScript!"
console.log( str.trimStart() );            // "Hello, JavaScript!  "
console.log( str.trimEnd() );              // "  Hello, JavaScript!"

let msg = "Test: FAIL. Retry: FAIL.";
console.log( msg.replace( "FAIL", "PASS" ) );    // "Test: PASS. Retry: FAIL."
console.log( msg.replaceAll( "FAIL", "PASS" ) ); // "Test: PASS. Retry: PASS."

// ----- 5. PAD & REPEAT -----

console.log( "5".padStart( 3, "0" ) );     // "005"
console.log( "5".padEnd( 3, "0" ) );       // "500"
console.log( "Hi".repeat( 3 ) );           // "HiHiHi"

// ----- 6. SPLIT & JOIN -----

let csv = "pass,fail,skip";
console.log( csv.split( "," ) );           // ["pass","fail","skip"]

let arr = ["2026", "06", "09"];
console.log( arr.join( "/" ) );            // "2026/06/09"

// ----- 7. CONCAT -----

console.log( "Hello".concat( " ", "World" ) ); // "Hello World"
console.log( "Hello " + "World" );             // "Hello World"
console.log( `${ "Hello" } ${ "World" }` );     // "Hello World"

// ----- 8. CONVERSION -----

console.log( String( 202 ) );              // "202"
console.log( ( 202 ).toString() );         // "202"
console.log( String( true ) );             // "true"
console.log( String( null ) );             // "null"

// ----- 9. COMMON INTERVIEW PATTERNS -----

// Reverse a string
let rev = "abcde".split( "" ).reverse().join( "" );
console.log( rev );                        // "edcba"

// Check palindrome
let word = "madam";
let isPalindrome = word === word.split( "" ).reverse().join( "" );
console.log( isPalindrome );               // true

// Count occurrences
let count = ( "aabbca".match( /a/g ) || [] ).length;
console.log( count );                      // 3

// Remove whitespace
console.log( "  a  b  ".replace( /\s+/g, "" ) ); // "ab"

// Extract number from string
console.log( "Order 42".match( /\d+/ )?.[0] );   // "42"
