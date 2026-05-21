let number = 7;

if ( number % 2 === 0 ) {
    console.log( "Even Number" );

}
else {
    console.log( "Odd Number" );
}


// Marks question 2

let TotalMarks = 40;

if ( TotalMarks >= 90 ) {
    console.log( "A grade" );
}
else if ( TotalMarks >= 80 ) {
    console.log( "B grade" );
}
else if ( TotalMarks >= 70 ) {
    console.log( "C grade" );

}
else if ( TotalMarks >= 60 ) {
    console.log( "D grade" );
}
else ( TotalMarks <= 59 )
{
    console.log( "Fail rewrite the exam" )
}

// Leap year 

let year = 2025;

if ( ( year % 4 == 0 && year % 100 != 0 ) || year % 400 == 0 ) {
    console.log( "Given year is a Leap year", year );
}
else {
    console.log( "Given number is not a leap year", year );
}