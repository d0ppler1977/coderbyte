function PalindromeSwapper(str) {
    const l = str.length;
    let swapStr = str;
    for (let i = 0; i < l; i ++) {
        for (let j = i + 1; j < l; j ++) {
            if (isPalindrome(swapStr)) return swapStr;
            swapStr = swap(str, i, j);
        }
    }
    return -1;
}

function swap(str, pos1, pos2) {
    const s = str.split("");
    const t = s[pos1];
    s[pos1] = s[pos2];
    s[pos2] = t;
    return s.join("");
}

function isPalindrome(str) {
    const rev = str.split("").reverse().join("");
    if (rev === str) return true;
    else return false;
}
console.log(PalindromeSwapper(process.argv[2]));