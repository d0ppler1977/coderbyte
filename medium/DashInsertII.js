function DashInsertII(str) { 
    str = String(str);
    const length = str.toString().length - 1;
    let retval = "";
    console.log(str[0]);
    for (let i = 0; i < length; i ++) {
        if ((str[i] % 2 !== 0) && (str[i + 1] % 2 !== 0)) {
            if ((str[i] == "0") || (str[i + 1] == "0")) retval = retval + str[i];
            else retval = retval + str[i] + "-";
        } else if ((str[i] % 2 === 0) && (str[i + 1] % 2 === 0)) {
            if ((str[i] == "0") || (str[i + 1] == "0")) retval = retval + str[i];
            else retval = retval + str[i] + "*";
        } else {
            retval = retval + str[i];
        }
    }
    // code goes here  
    return retval + str[str.length - 1];
}

console.log(DashInsertII(process.argv[2]));