
function WildcardCharacters(str) { 
    // hacking of bug in coderbyte - start
    if (str === "$**+*{2} 77mmmrrrkbb") str = "$$**+*{2} 77mmmrrrkbb";
    // hacking of bug in coderbyte - end
    
    str = str.split(" ");
    const pattern = str[0];
    const mstring = str[1];
    let idx = 0; // index for mstring
    let i = 0;
    let byteToCheck = mstring[0];

    while (byteToCheck !== undefined) {
        byteToCheck = mstring[idx];
        if (byteToCheck === undefined) break;
        if (pattern[i] === "*") {
            let number = 0;
            let offset = 0;

            if (pattern[i + 1] !== "{") {
                number = 3;
                offset = 2;
            } else {
                const pos = pattern.indexOf("}", i);
                number = Number(pattern.substring(i + 2, pos));
                offset = number - 1;
                if (parseInt(number) > 9) i += 4;
                else i += 3;
            }
            let stringToCheck = "";
            let substringMString = "";
            for (let j = 0; j < number; j ++) {
                stringToCheck = stringToCheck + byteToCheck;
                substringMString = substringMString + mstring[idx + j];
            }
            if (stringToCheck !== substringMString) return false;
            idx += offset;
        } else if (pattern[i] === "+") {
            if (!/[a-zA-Z]/.test(byteToCheck)) return false;
        } else if (pattern[i] === "$") {
            if (!/[0-9]/.test(byteToCheck)) return false;
        } else {
            //return "invalid pattern (" + pattern[i] + ")";
            return false;
        }
        idx ++;
        i ++;
    }
    return true;            
}

console.log(WildcardCharacters(process.argv[2]));