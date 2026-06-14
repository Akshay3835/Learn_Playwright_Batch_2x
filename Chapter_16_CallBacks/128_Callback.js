function print() {
    console.log( "Normal Function is Called" );

}

function placeOrder( ClipboardItem, akshayCallback ) {
    console.log( "Hi, Your Order is placed" );
    akshayCallback();

}

//First way
placeOrder( "Pizza", print );

//Second way

placeOrder( "Burger", function () {
    console.log( "Anoy FN, I am also a functionwithout name" );

} );

// Third way
placeOrder( "Momos", () => {
    console.log( "Arrow FN, I am also a functionwithout name" );
} );