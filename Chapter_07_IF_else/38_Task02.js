//Question 1

let statusCode = 303;

if ( statusCode >= 200 && statusCode <= 299 ) {
    console.log( statusCode, "Comes in the Success Code" )
}
else if ( statusCode >= 300 && statusCode <= 399 ) {
    console.log( statusCode, "Comes in the Redirection" )
}
else if ( statusCode >= 400 && statusCode <= 499 ) {
    console.log( statusCode, "Comes in the client error" )
}
else if ( statusCode >= 500 && statusCode <= 599 ) {
    console.log( statusCode, "Comes in the server error" )
}
else {
    console.log( statusCode, "Comes in the Invaild code" )
}

statusCode = 404;

if ( statusCode >= 200 && statusCode <= 299 ) {
    console.log( statusCode, "Comes in the Success Code" )
}
else if ( statusCode >= 300 && statusCode <= 399 ) {
    console.log( statusCode, "Comes in the Redirection" )
}
else if ( statusCode >= 400 && statusCode <= 499 ) {
    console.log( statusCode, "Comes in the client error" )
}
else if ( statusCode >= 500 && statusCode <= 599 ) {
    console.log( statusCode, "Comes in the server error" )
}
else {
    console.log( statusCode, "Comes in the Invaild code" )
}