function BinaryReversal(str) { 
    Number.prototype.pad = function(size) {
        let s = String(this);
        while (s.length < (size || 2)) {
            s = "0" + s;
        }
        return s;
    }
    
    let binary = parseInt(str, 10).toString(2);
    //console.log("binary before pad : " + binary);
    let factor = binary.length / 8;
    if (factor !== parseInt(factor)) factor = parseInt(factor) + 1;
    binary = Number(binary).pad(8 * factor);

    binary = binary.toString();
    //console.log("binary before reverse : " + binary);
    let length = binary.length;
    let retval = "";
    for (let i = length - 1; i >= 0; i--) {
        retval += binary[i];
    }

    retval = parseInt(retval, 2);
    return retval; 
}

console.log(BinaryReversal(process.argv[2]));
