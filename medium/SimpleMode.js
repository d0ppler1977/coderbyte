function SimpleMode(arr) {
    const l = arr.length;
    const numbers = {};

    for (let i = 0; i < l; i ++) {
        if (numbers[arr[i]]) {
            numbers[arr[i]] ++;
        } else {
            numbers[arr[i]] = 1;
        }
    }

    let highest = 0;
    let number = 0;
    for (let i = 0; i < l; i ++) {
        if (numbers[arr[i]] > highest) {
            highest = numbers[arr[i]];
            number = arr[i];
        }
    }
    if (highest > 1) return number;
    else return -1;
}


const input = [5, 10, 10, 6, 5, 10, 10, 1, 1, 1, 1, 1, 1, 1];
console.log(SimpleMode(input));