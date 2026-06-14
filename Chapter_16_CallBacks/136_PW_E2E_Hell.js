console.log( "Test Execution Started" );

setTimeout( function () {
    console.log( "  1. Browser Opened" );

    setTimeout( function () {
        console.log( "    2. Navigated to https://example.com/login" );

        setTimeout( function () {
            console.log( "      3. Login Page Loaded" );

            setTimeout( function () {
                console.log( "        4. Entered Username & Password" );

                setTimeout( function () {
                    console.log( "          5. Clicked Login Button" );

                    setTimeout( function () {
                        console.log( "            6. Dashboard Page Loaded" );

                        setTimeout( function () {
                            console.log( "              7. Verified User Name on Dashboard" );

                            setTimeout( function () {
                                console.log( "                8. Clicked Logout" );

                                setTimeout( function () {
                                    console.log( "                  9. Logged Out Successfully" );
                                    console.log( "                  Test Execution Completed" );

                                }, 500 );

                            }, 500 );

                        }, 500 );

                    }, 500 );

                }, 500 );

            }, 500 );

        }, 500 );

    }, 500 );

} );

console.log( "Initiating End-to-End Test Flow..." );
