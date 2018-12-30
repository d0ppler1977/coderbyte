"use strict";

function ArrayRotation(arr) {
    let strArr = "";
    const cursor = Number(arr[0]);
    const length = arr.length;
    let hasShifted = false;
    let idx = 0;
    for (let i = 0; i < length; i++) {
        if ((idx >= (length - 1)) || (hasShifted === true)) {
            if(!hasShifted) {
                hasShifted = true;
                idx = 0;
            } else {
                idx ++;
            }
        } else {
            idx = i + cursor
        }
        strArr += arr[idx];
    }

    return strArr;
}
const inputParam = [2, 3, 4, 1, 6, 10];

console.log(ArrayRotation(inputParam));
