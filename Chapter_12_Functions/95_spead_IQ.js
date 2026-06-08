function add( a, b, c ) {
    return a + b + c;
}

let num = [1, 2, 3];
add( ...num );

let responsecode = [200, 201, 404];
function hasError( ...code ) {
    return code.some( c => c >= 400 );
}

hasError( ...responsecode );