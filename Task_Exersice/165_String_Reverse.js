let string = "MADAM";

let rev = "";
let len = string.length;

for ( let i = len - 1; i >= 0; i-- ) {
    rev += string[i];

}

console.log( rev );


let str = "Akshay";
let reverse = "";

let name = str.length;

for ( i = name - 1; i >= 0; i-- ) {
    reverse = reverse + str[i];
}

console.log( reverse );


// Palindrome

if ( rev.toLowerCase === string.toLowerCase ) {

    console.log( " Given String " + rev + " is Palindrome" );

}
else {

    console.log( " Given String " + reverse + " is not a Plaindrome" );

}

