function LargestFour(arr) {
    arr.sort(sortNumber);
    let sum = 0;
    for (let i = 0; i < 4; i ++) {
        if (arr.length < 1) break;
        const top = arr.shift();
        sum += top;
    }
    return sum;
}

function sortNumber(a, b) {
    return b - a;
}

const input = [4, 5, -2, 3, 1, 2, 6, 6];
//const input = [1, 1, 1, -5];
console.log(LargestFour(input));