// Function Definition
function showMyName(name) {
    console.log(name);
}

// Calling fucntion
showMyName("Nitish");

// Loose type function : We can also cal without arguement
showMyName();

// Refrence to a function : Name of function without () is refer to fucntion definition
console.log(showMyName);

// Fnction Hositing 
testFunction();
console.log("Definiton");
function testFunction(){
    console.log("Executing  function.");
}

// 
// Private function : A function inside another function is private function of outside function
function outerFunction(){
    var message = "Outer function varaible";
    console.log("Outer function executing.")
    innerFunction();
    function innerFunction(){
        console.log("Inner function executing");
        console.log(message);
    }
}

// Funciton as expression as named exprssion
var factorial = function fact(n){
    ans = 1;
    for(var i=1;i<=n;i++){
        ans *= i;
    }
    console.log(ans);
}

factorial(5);
console.log(typeof(factorial))
console.log(factorial);
// fact(5); Cause error : fact not defined

factorial = function(n){
    {
        ans = 1;
        for(var i=1;i<=n;i++){
            ans *= i;
        }
        console.log(ans);
    }
}

factorial(6);
console.log(factorial);

