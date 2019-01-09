function MissingDigitII(str) {
    const arr = str.split("=");
    const lefthand = arr[0];
    const righthand = arr[1];
    for (let i = 0; i < 10; i ++) {
        for (let j = 0; j < 10; j ++) {
            const left = lefthand.replace("?", i.toString());
            const right = righthand.replace("?", j.toString());
            if (eval(left) === eval(right)) return i + " " + j;
        }
    }
}

console.log(MissingDigitII(process.argv[2]));