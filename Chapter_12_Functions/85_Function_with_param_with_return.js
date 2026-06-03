function sumOfTwoNumbers( a, b ) {
    return a + b;

}

let total = sumOfTwoNumbers( 5, 10 );
console.log( total );

function isEven( num ) {
    return num % 2 === 0;
}
console.log( isEven( 4 ) );
console.log( isEven( 7 ) );

function getFullName( firstName, lastName ) {
    return firstName + " " + lastName;
}
console.log( getFullName( "John", "Doe" ) );

function findMax( a, b ) {
    if ( a > b ) {
        return a;
    } else {
        return b;
    }
}
console.log( findMax( 23, 45 ) );

function celsiusToFahrenheit( celsius ) {
    return ( celsius * 9/5 ) + 32;
}
console.log( celsiusToFahrenheit( 0 ) );
console.log( celsiusToFahrenheit( 100 ) );
