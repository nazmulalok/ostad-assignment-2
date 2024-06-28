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

// Question - 4
function reverseString(str) {
    let reversed = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}


const inputString = "hello string";
const result4 = reverseString(inputString);
console.log(result4);

// Question - 5
function filterOddNumbers(numArr) {
    let finalOdd = [];

    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] % 2 !== 0) {
            finalOdd.push(numArr[i]);
        }
    }
    return finalOdd;
}

const oddNumbersCheck = [3, 7, 2, 9, 5, 8];
const result5 = filterOddNumbers(numbers);
console.log(result5);

// Question - 6
function sumArray(arrSum) {
    let sum = 0;

    for (let i = 0; i < arrSum.length; i++) {
        sum += arrSum[i];
    }

    return sum;
}

const sumNumbers = [3, 7, 2, 9, 5];
const result6 = sumArray(sumNumbers);
console.log(result6);

// Question - 7
function sortArray(sortArr) {
    let sortedArray = sortArr.slice();

    sortedArray.sort(function (a, b) {
        return a - b;
    });

    return sortedArray;
}

const sortNumbers = [3, 7, 2, 9, 5];
const result7 = sortArray(sortNumbers);
console.log(result7);
