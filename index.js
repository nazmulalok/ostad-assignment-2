// Question - 1
function calculateSum(a, b) {
    return a + b;
}
const result = calculateSum(12, 8);
console.log(result);

// Question - 2
function isEven(num) {
    return num % 2 === 0;
}
const result2 = isEven(11);
console.log(result2);

// Question - 3
function findMax(arr) {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }
    let maxnum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxnum) {
            maxnum = arr[i];
        }
    }
    return maxnum;
}

const numbers = [3, 7, 2, 9, 5];
const result3 = findMax(numbers);
console.log(result3);