let numbers = [2, 4, 9, 10, 45, 67, 8, 90];
let num2 = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2==0) {
        num2.push(numbers[i])
    }
}

console.log("juft sonlar", num2);