function TripleDouble(num1, num2) {
    snum1 = String(num1);
    snum2 = String(num2);
    const l = snum1.length;
    for (let i = 0; i < l - 2; i++) {
        if ((snum1[i] === snum1[i + 1]) && (snum1[i] === snum1[i + 2])) {
            const searchString = snum1[i] + snum1[i + 1];
            if (snum2.indexOf(searchString) > -1) return 1;
        }
    }
    return 0;
}

console.log(TripleDouble(22267844 , 6624374422));
