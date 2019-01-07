"use strict";

function MaxSubarray(arr) { 
    const l = arr.length;
    const sums = [];
    for (let i = 0; i < l; i ++) {  // start index
        for (let j = l; j > i; j --) {
            for (let k = i; k <= j; k ++) {

            }
            const sum = arr.slice(i, j).reduce((total, current) => total + current, 0);
            sums.push(sum);
        }
    }
    sums.sort((a, b) => a - b);
    return sums.pop();
}

const input =  [3, -1, -1, 4, 3, -1];
console.log(MaxSubarray(input));