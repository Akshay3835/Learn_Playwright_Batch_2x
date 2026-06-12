let config = {}

config.browser = "Chrome";
config.timout = 3000;
config.testName = "Login_Test";

console.log( config );

delete config.browser;

if ( config.browser === "Chrome" ) {
    console.log( " I will execute in this browser" );

}
else {
    console.log( " In Valid browser" );

}

let config2 = {
    browser = " Edge",
    testName = "Login_Test",
    timeout = 4000
};

console.log( config2 );
