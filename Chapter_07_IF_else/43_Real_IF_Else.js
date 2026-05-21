let isLoggedIn = true;
let userRole = "admin";

if ( isLoggedIn ) {
    if ( userRole === "admin" ) {
        console.log( "admin can do all things" );

    }
    else if ( userRole === "editor" ) {
        console.log( "Welcome editor - editing access granted" );
    }
    else if ( userRole === "viewer" ) {
        console.log( " Read only access is granted" );
    }
    else {
        console.log( "No idea u may be a guest! role" );
    }
}

isLoggedIn = true;
userRole = "XYZ";

if ( isLoggedIn ) {
    if ( userRole === "admin" ) {
        console.log( "admin can do all things" );

    }
    else if ( userRole === "editor" ) {
        console.log( "Welcome editor - editing access granted" );
    }
    else if ( userRole === "viewer" ) {
        console.log( " Read only access is granted" );
    }
    else {
        console.log( "No idea u may be a guest! role" );
    }
}