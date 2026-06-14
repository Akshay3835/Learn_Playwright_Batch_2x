console.log( "Order Placed : Step 1" );

setTimeout( function () {
    console.log( "  Payment Processed : Step 2" );

    setTimeout( function () {
        console.log( "    Inventory Checked : Step 3" );

        setTimeout( function () {
            console.log( "      Package Dispatched : Step 4" );

            setTimeout( function () {
                console.log( "        Out for Delivery : Step 5" );

                setTimeout( function () {
                    console.log( "          Delivered : Step 6" );
                    console.log( "          Order Complete !" );

                }, 1000 );

            }, 1000 );

        }, 1000 );

    }, 1000 );

}, 1000 );

console.log( "Placing order..." );
