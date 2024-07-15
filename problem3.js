// problem 3
function sum() {
    let sum = 0;
    for (const value in arguments) {
        const number = arguments[value];
        sum += number;
    }


    return sum;

}


console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20, 30, 40)); // 100
console.log(sum(5)); // 5