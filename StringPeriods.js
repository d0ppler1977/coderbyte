function StringPeriods(str) {
    const max = parseInt(str.length / 2, 10);
    const l = str.length;
    for (i = max; i > 0; i --) {
        for (j = 0; j <= l - i; j ++) {
            const substring = str.substring(j, j + i);
            const count = str.split(substring).length - 1;
            //console.log("found " + count + " occurences of " + substring + " in " + str);
            if (count > 1) {
                let testString = "";
                for (let k = 0; k < count; k ++) {
                    testString = testString + substring;
                }
                //console.log("testString : " + testString);
                if (testString === str) return substring;
            }
        }
    }
    return -1;
}

console.log(StringPeriods(process.argv[2]));
