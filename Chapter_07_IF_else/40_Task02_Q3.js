// Question 3 Bug Severity Classifer

let score = 9;

if ( score == 9 && score <= 10 ) {
    console.log( "Severity: Critical — Block release" );
}
else if ( score >= 7 && score <= 8 ) {
    console.log( "Severity: High — Block release" )
}
else if ( score >= 4 && score <= 6 ) {
    console.log( "Severity: Medium — Block release" );
}
else if ( score >= 1 && score <= 3 ) {
    console.log( "Severity: Low — Block release" )
}
else {
    console.log( "Invaild Score" );
}

score = 5;

if ( score == 9 && score <= 10 ) {
    console.log( "Severity: Critical — Block release" );
}
else if ( score >= 7 && score <= 8 ) {
    console.log( "Severity: High — Block release" )
}
else if ( score >= 4 && score <= 6 ) {
    console.log( "Severity: Medium — Block release" );
}
else if ( score >= 1 && score <= 3 ) {
    console.log( "Severity: Low — Block release" )
}
else {
    console.log( "Invaild Score" );
}