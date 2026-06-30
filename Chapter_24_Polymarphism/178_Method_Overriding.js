class BaseTest {
    setup() {
        console.log( "Base: open browser" );
    }
}

class APIPage extends BaseTest {
    setup() {
        console.log( "APITest: open browser" );
    }
}

class BrowserPage extends BaseTest {
    setup() {
        console.log( " BRowserTest : Open Google" );

    }
}

let test = new APIPage();
test.setup();

let test2 = new BrowserPage();
test2.setup();

