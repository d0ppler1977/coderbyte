function PermutationStep(num) {
    const numStr = String(num);
    const l = numStr.length;
    const numbers = getAllCombos(String(num));

    numbers.sort(sortNumber);
    const ubound = numbers.length;
    for (let i = 0; i < ubound; i ++) {
        if (numbers[i] > num) return numbers[i];
    }
    return -1;
}

function sortNumber(a, b) {
    return a - b;
}

function getAllCombos(str) {
    if (str.length < 2) return str;
    const combos = []; // the array with every combo, the return value
    const l = str.length;
    for (let i = 0; i < l; i ++) {
        const char = str[i];

        if (str.indexOf(char) === i) {
            const remainingString = str.substring(0, i) + str.substring(i + 1, l);
            for (let substr of getAllCombos(remainingString)) {
                combos.push(char + substr);
            }
        }
    }
    return combos;
}

console.log(PermutationStep(process.argv[2]));