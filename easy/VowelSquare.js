function VowelSquare(strArr) { 

    const w = strArr[0].length;
    const h = strArr.length;

    for (let i = 0; i < h - 1; i ++) {
        for (let j = 0; j < w - 1; j ++) {
            const a = strArr[i][j];
            const b = strArr[i][j + 1];
            const c = strArr[i + 1][j];
            const d = strArr[i + 1][j + 1];
            if ((isVowel(a)) && (isVowel(b)) && (isVowel(c)) && (isVowel(d))) {
                return i + "-" + j;
            }
        }
    }

    return "not found";
}

function isVowel(char) {
    return /[aeiou]/.test(char);
}
const input = ["gg", "ff"];

console.log(VowelSquare(input));