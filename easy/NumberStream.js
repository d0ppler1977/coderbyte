function NumberStream(str) { 
    const l = str.length;
    for (let i = 0; i < l; i ++) {
        const char = str[i];
        const length = Number(char);
        const test = stringPad(char);
        if (str.substring(i, i + length) === test) return true;
    }
    // code goes here  
    return false; 
}

function stringPad(char) {
    const l = Number(char);
    let ret = "";
    for (let i = 0; i < l; i ++) {
        ret = ret + char;
    }
    return ret;
}

console.log(NumberStream(process.argv[2]));
