let expectedStatus = "Login Successful";
let actualStatus = "Login Successful";

if ( expectedStatus === actualStatus ) {
    console.log( " ✅ Test Passed" );
}
else if ( expectedStatus != actualStatus ) {
    console.log( " ❌ Test Failed — Expected: Login Successful, Got: Invalid Credentials" )
}

expectedStatus = "Login Successful";
actualStatus = "Invaild Credentials";

if ( expectedStatus === actualStatus ) {
    console.log( " ✅ Test Passed" );
}
else if ( expectedStatus != actualStatus ) {
    console.log( " ❌ Test Failed — Expected: Login Successful, Got: Invalid Credentials" )
}