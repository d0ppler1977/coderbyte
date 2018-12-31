function SwapII(str) { 
    console.log("input : " + str);
    str = invertCase(str);
    console.log("rever : " + str);
    const l = str.length;
    let retval = "";
    for (let i = 0; i < l; i ++) {
        if (/[0-9]/.test(str[i])) {
            let searchString = str.substring(i);
            const posOfSpace = searchString.indexOf(" ");
            if (posOfSpace > 0) searchString = searchString.substring(0, posOfSpace);
            const pattern = /\d[a-zA-Z]+\d/;
            if (pattern.test(searchString)) {
                const match = searchString.match(pattern)[0];
                console.log("  match ---> " + match);
                i += match.length - 1;
                const first = match[0];
                const last = match[match.length - 1];
                retval += last + match.substring(1, match.length - 1) + first;
            } else {
                retval += str[i];
            }
        } else {
            retval += str[i];
        }
    }
    return retval;
}

function invertCase(str) {
    const l = str.length;
    let retval = "";
    for (let i = 0; i < l; i++) {
        if (str[i] === str[i].toUpperCase()) retval += str[i].toLowerCase();
        else if (str[i] === str[i].toLowerCase()) retval += str[i].toUpperCase();
        else retval += str[i];
    }
    return retval;
}
console.log(SwapII(process.argv[2]));
