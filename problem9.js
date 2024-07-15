//  problem 9

const nestedArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Your code here
const sumArray = [];

for (const numbers of nestedArrays) {
    let sum = 0;
    for (const number of numbers) {
        sum += number;
    }
    sumArray.push(sum);
    sum = 0;
}
console.log(sumArray);