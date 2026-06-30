class BaseTest {

    setup() {
        console.log( "Base : Open Browser" );

    }
}

class APITEST extends BaseTest {
    setup() {
        console.log( " APITEST : open Browser" );

    }
}

let test = new APITEST(); // / whoever object is present, it will call that.
test.setup();