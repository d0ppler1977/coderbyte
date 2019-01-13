function SimpleEvens(num) { 
    const nArray = num.toString().split("");
    const l = nArray.length;
    for(let i = 0; i < l; i ++) {
        if (nArray[i] % 2 !== 0) return false;
    }
    return true;
}

console.log(SimpleEvens(process.argv[2]));
