function StringReduction (str) {
    let idx = 0;

    const searchchars = "abc";
    const l = searchchars.length;
    const combos = [];
    //creating every combo into comboarray
    for (i = 0; i < l; i ++) {
        for (j = 0; j < l; j ++) {
            if (j !== i) {
                combos.push(searchchars[i] + searchchars[j]);
            }
        }
    }
    const combocount = combos.length;
    let previous = "";
    while (str != previous) {
        previous = str;
        for (let i = 0; i < combocount; i ++) {
            const replChar = getTheOtherChar(combos[i]);
            str = str.replace(combos[i], replChar);
        }
    }
    return str.length;

}

function getTheOtherChar(str) {
    if (str.indexOf("a") < 0) return "a";
    else if (str.indexOf("b") < 0) return "b";
    else return "c";
}

console.log(StringReduction(process.argv[2]));
