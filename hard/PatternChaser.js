/*
Challenge
Have the function PatternChaser(str) take str which will be a string and return the longest 
pattern within the string. A pattern for this challenge will be defined as: if at least 
2 or more adjacent characters within the string repeat at least twice. 
So for example "aabecaa" contains the pattern aa, on the other hand "abbbaac" doesn't contain any pattern. 
Your program should return yes/no pattern/null. 
So if str were "aabejiabkfabed" the output should be yes abe. 
If str were "123224" the output should return no null. 
The string may either contain all characters (a through z only), integers, or both. 
But the parameter will always be a string type. 
The maximum length for the string being passed in will be 20 characters. 
If a string for example is "aa2bbbaacbbb" the pattern is "bbb" and not "aa". 
You must always return the longest pattern possible. 

Hard challenges are worth 15 points and you are not timed for them.
Sample Test Cases
Input:"da2kr32a2"

Output:"yes a2"


Input:"sskfssbbb9bbb"

Output:"yes bbb"
*/

function PatternChaser(str) {
    const l = str.length;
    for (let size = l - 1; size > 0; size-- ) {
        for (let startPos = 0; startPos < l - size; startPos ++) {
            const pattern = str.substring(startPos, startPos + size + 1);
            const occurences = str.split(pattern).length - 1;
            //console.log("Found " + occurences + " occurences of " + pattern + " in " + str);
            if (occurences > 1) return "yes " + pattern;
        }
    }
    return "no null";
}

console.log(PatternChaser(process.argv[2]));