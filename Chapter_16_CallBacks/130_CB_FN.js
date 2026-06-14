function cafe( item, callWhenTableisReady ) {
    console.log( "Finding ...1" );
    console.log( "Finding ...2" );
    console.log( "Finding ...3" );
    console.log( "Finding ...4" );
    console.log( item );
    callWhenTableisReady();

};

function callWhenTableisReady() {
    console.log( "Calling 6305797013..." );

}

cafe( "Burger", callWhenTableisReady );

cafe( "Pizza", function () {
    console.log( "Calling 6305797018..." );

} );

cafe( "Momos", () => {
    console.log( "Calling 6305797088..." );
} );