function BracketMatcher(str) {
    const startBracketCount = str.replace(/[^\(]/g, "").split("").length;
    const endBracketCount = str.replace(/[^\)]/g, "").split("").length;
    if (startBracketCount !== endBracketCount) return 0;
    
    const l = str.length;
    let firstBracketFound = false;
    let lastBracket = "";
    for (i = 0; i < l; i ++) {
        if (str[i] === "(") firstBracketFound = true;
        if ((str[i] === ")") && (!firstBracketFound)) return 0;
        if ((str[i] === "(") || (str[i] === ")")) lastBracket = str[i];
    }
    if (lastBracket === "(") return 0;
    return 1;
}

console.log(BracketMatcher(process.argv[2]));
