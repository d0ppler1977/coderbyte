function StockPicker(arr) {
    let max = -1;
    const l = arr.length;
    for (let i = 0; i < l; i ++) {
        for (let j = i + 1; j < l; j ++) {
            const diff = arr[j] - arr[i];
            if (diff > max) max = diff;
        }
    }
    return max;
}

const input = [14,20,4,12,5,11];

console.log(StockPicker(input));
