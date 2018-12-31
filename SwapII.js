function SwapII(str) { 
    str = invertCase(str);
    const l = str.length;
    let retval = "";
    for (let i = 0; i < l; i ++) { // loop through the string
        if (/[0-9]/.test(str[i])) { // if current char is a digit, then check it further..
            let searchString = str.substring(i);
            const posOfSpace = searchString.indexOf(" ");
            if (posOfSpace > 0) searchString = searchString.substring(0, posOfSpace); // limit the searchstring to next space or end of string if no space is found
            const pattern = /\d[a-zA-Z]+\d/; // this is the pattern we're looking for
            if (pattern.test(searchString)) {
                const match = searchString.match(pattern)[0];
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

// help function
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
