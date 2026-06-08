// This is normal function
function validateStatuscode( status ) {
    if ( status >= 200 && status <= 300 ) {
        console.log( " Request is fine  !" );
    }
}

const vaildStatusCode_Exp = function ( status ) {
    if ( status >= 200 && status <= 300 ) {
        console.log( "Request is fine!" );
    }
}

const vaildStatusCode_Arrow = ( status ) => {
    if ( status >= 200 && status <= 300 ) {
        console.log( "Request code is fine!" );
    }
}


vaildStatusCode_Arrow( 202 );
vaildStatusCode_Exp( 201 );
validateStatuscode( 260 );