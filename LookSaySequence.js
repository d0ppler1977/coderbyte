function LookSaySequence (num) {
    num = String(num);
    const l = num.length;
    let retval = "";
    let current = num[0];
    let counter = 1;
    for (let i = 1; i < l; i ++) {
        if (current !== num[i]) {
            retval += counter + current;
            current = num[i];
            counter = 1;
        } else {
            counter ++;
        }
        //console.log(num[i]);
    }
    retval += counter + current;
    return retval;
}

console.log(LookSaySequence(process.argv[2]));
