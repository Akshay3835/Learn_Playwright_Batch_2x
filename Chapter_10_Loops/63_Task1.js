let a = 30;
let b = 30;
let c = 30;

if ( a === b && b === c && c === a ) {
    console.log( "All sides are equal : Equilateral Triangle" )
}
else if ( a === b || b === c || c === a ) {
    console.log( "Exactly two sides are equal : Isosceles Triangle" )
}
else {
    console.log( "No sides are equal : Scalene Triangle" )
}

console.log( "-----------------------" );

a = 30;
b = 30;
c = 40;

if ( a === b && b === c && c === a ) {
    console.log( "All sides are equal : Equilateral Triangle" )
}
else if ( a === b || b === c || c === a ) {
    console.log( "Exactly two sides are equal : Isosceles Triangle" )
}
else {
    console.log( "No sides are equal : Scalene Triangle" )
}

console.log( "------------------" );

a = 30;
b = 40;
c = 50;

if ( a === b && b === c && c === a ) {
    console.log( "All sides are equal : Equilateral Triangle" )
}
else if ( a === b || b === c || c === a ) {
    console.log( "Exactly two sides are equal : Isosceles Triangle" )
}
else {
    console.log( "No sides are equal : Scalene Triangle" )
}