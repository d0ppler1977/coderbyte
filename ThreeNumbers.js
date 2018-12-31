/*
Challenge
Have the function ThreeNumbers(str) take the str parameter being passed and determine 
if exactly three unique, single-digit integers occur within each word in the string. 
The integers can appear anywhere in the word, but they cannot be all adjacent to each other.
 If every word contains exactly 3 unique integers somewhere within it, then return the string true, 
 otherwise return the string false. 
 For example: if str is "2hell6o3 wor6l7d2" then your program should return "true" 
 but if the string is "hell268o w6or2l4d" then your program should return "false" 
 because all the integers are adjacent to each other in the first word.
Sample Test Cases
Input:"2a3b5 w1o2rl3d g1gg92"

Output:"true"


Input:"21aa3a ggg4g4g6ggg"

Output:"false"
*/
function ThreeNumbers(str) {
    const words = str.split(" ");
    const l = words.length;
    for (let i = 0; i < l; i ++) {
        if (!containsThreeUniqueDigits(words[i])) return false;
    }
    return true;
}

function containsThreeUniqueDigits(str) {
    const extract = str.split(/[^0-9]/);
    const l = extract.length;
    const extractWithOnlyDigits = [];
    
    // make a new more cleaner array
    for (let i = 0; i < l; i ++) {
        if (extract[i] !== "") extractWithOnlyDigits.push(extract[i]);
    }

    if ((extractWithOnlyDigits.length < 2) || (extractWithOnlyDigits.length > 3)) {
        return false;
    } else {
        // check to see if all digits are unique, we'll create a new array which holds exactly one digit
        const digits = extractWithOnlyDigits.join("").split("");
        for (let i = 0; i < 3; i ++) {
            for (let j = i + 1; j < 3; j ++) {
                //console.log("Comparing " + digits[i] + " against " + digits[j]);
                if (digits[i] === digits[j]) return false;
            }
        }
    }
    return true;
}
console.log(ThreeNumbers(process.argv[2]));