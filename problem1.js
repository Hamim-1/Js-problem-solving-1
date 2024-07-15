// problem 1
function scopeTest() {
    if (true) {
        var varVariable = "I am var";
        let letVariable = "I am let";
        const constVariable = "I am const";
    }
    console.log(varVariable);
    console.log(letVariable);
    console.log(constVariable);
}

scopeTest();

// output will be    I am var
//  for let & const will give error
// because these variables are not accessible outside the if block.