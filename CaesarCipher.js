/*
Have the function CaesarCipher(str,num) take the str parameter and perform a Caesar Cipher 
shift on it using the num parameter as the shifting number. 
A Caesar Cipher works by shifting each letter in the string N places down in the 
alphabet (in this case N will be num). Punctuation, spaces, and capitalization 
should remain intact. For example if the string is "Caesar Cipher" and num is 2 the output should be "Ecguct Ekrjgt". 


*/

function CaesarCipher (str, num) {
    const l = str.length;
    let retval = "";
    for (let i = 0; i < l; i ++) {
        if (/[a-z]/.test(str[i])) {
            let charcode = str.charCodeAt(i) + num;
            //a = 97,  z = 122
            if (charcode > 122) charcode = charcode - 122 + 96; // shifting the charcode
            retval += String.fromCharCode(charcode);
        } else if (/[A-Z]/.test(str[i])) {
            let charcode = str.charCodeAt(i) + num;
            // A = 65, B = 90
            if (charcode > 90) charcode = charcode - 90 + 64; // shifting the charcode
            retval += String.fromCharCode(charcode);
        } else {
            retval += str[i];
        }
    }
    return retval;
}

console.log(CaesarCipher("dogs", 8));