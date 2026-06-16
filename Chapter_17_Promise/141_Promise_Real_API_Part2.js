let apiCall = new Promise( function ( resolve, reject ) {
    reject( {
        status: 500, body: "Error Data"
    } )
} );

apiCall.then( function ( response ) {
    console.log( response.status );

} ).catch( function ( error ) {
    console.log( error.status );

} )