function outer() {
    let meassage = " hello";
    console.log( " Outer Called !" );
    function inner() {
        console.log( meassage );

    }
    return inner;
}

let fn_inner = outer();
fn_inner();