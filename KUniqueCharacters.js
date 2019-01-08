function KUniqueCharacters (str) {
    const k = str[0];
    const chars = str.substring(1);
    const l = chars.length;
    const subStrings = [];
    for (let i = 0; i < l; i ++) {
        let substr = "";
        let uniqueChars = 0;
        for (let j = i; j < l; j ++) {
            if (substr.indexOf(chars[j]) < 0) uniqueChars ++;
            if (uniqueChars <= k) substr += chars[j];
            else break;
        }
        subStrings.push(substr);
    }
    let retval = "";
    for (const substr of subStrings) {
        if (substr.length > retval.length) retval = substr;
    }
    return retval;
}

console.log(KUniqueCharacters(process.argv[2]));
