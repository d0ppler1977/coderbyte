/*
Challenge
Have the function MultipleBrackets(str) take the str parameter being passed and 
return 1 #ofBrackets if the brackets are correctly matched and each one is accounted for. 
Otherwise return 0. 
For example: if str is "(hello [world])(!)", then the output should be 1 3 because all 
the brackets are matched and there are 3 pairs of brackets, but if str is "((hello [world])" 
the the output should be 0 because the brackets do not correctly match up. 
Only "(", ")", "[", and "]" will be used as brackets. If str contains no brackets return 1. 
Sample Test Cases
Input:"(coder)[byte)]"

Output:0


Input:"(c([od]er)) b(yt[e])"

Output:1 5
*/

function MultipleBrackets(str) {
    const startBracketCount = str.replace(/[^\(]/g, "").split("").length;
    const endBracketCount = str.replace(/[^\)]/g, "").split("").length;
    const startCBracketCount = str.replace(/[^\[]/g, "").split("").length;
    const endCBracketCount = str.replace(/[^\]]/g, "").split("").length;
    if ((startBracketCount === 0) && (endBracketCount === 0) && (startCBracketCount === 0) && (endCBracketCount === 0)) return 1;

    if ((startBracketCount === endBracketCount) && (startCBracketCount === endCBracketCount)) {
        let firstStart = str.indexOf("(");
        let firstend = str.indexOf(")");
        if (firstend < firstStart) return 0;
        firstStart = str.indexOf("[");
        firstend = str.indexOf("]");
        if (firstend < firstStart) return 0;

        return 1 + " " + (startBracketCount + startCBracketCount);
    } else {
        return 0;
    }
}

console.log(MultipleBrackets(process.argv[2]));
