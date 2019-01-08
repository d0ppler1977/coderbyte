/*
1. For the input ["wrdlmaeo", "a,b,c,d,ap,apple,bar,bat,cat,hello,y,yellow,w,wo,world,worr"] your output was incorrect. The correct answer is 6
*/

function CharacterRemoval(strArr) {
    const str = strArr.shift();
    const dictionary = strArr[0].replace(/ /g, "").split(",");

    function existAllCharactersInString(word, str) {
        let m = word.length;
        let n = str.length;
        let j = 0;
        for (let i = 0; i < n; i ++) {
            if (word[j] === str[i]) j ++;
        }
        return (j === m);
    }

    let letterCount = -1;
    for (const word of dictionary) {
        if(existAllCharactersInString(word, str)) {
            const diff = str.length - word.length;
            if (letterCount === -1) letterCount = diff;
            if (diff < letterCount) letterCount = diff;
        }
    }
    return letterCount;
}

const input = ["worlcde", "apple,bat,cat,goodbye,hello,yellow,why,world"];
console.log(CharacterRemoval(input));
