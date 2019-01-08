/*
Challenge
Have the function LCS(strArr) take the strArr parameter being passed which will 
be an array of two strings containing only the characters {a,b,c} and 
have your program return the length of the longest common subsequence 
common to both strings. A common subsequence for two strings does not 
require each character to occupy consecutive positions within the original 
strings. For example: if strArr is ["abcabb","bacb"] then your program should 
return 3 because one longest common subsequence for these two strings is "bab" 
and there are also other 3-length subsequences such as "acb" and "bcb" 
but 3 is the longest common subsequence for these two strings. 

Hard challenges are worth 15 points and you are not timed for them.
Sample Test Cases
Input:"abc","cb"

Output:1


Input:"bcacb","aacabb"

Output:3
*/

function LCS(strArr) {
    const str1 = strArr[0];
    const str2 = strArr[1];

    const m = str1.length;
    const n = str2.length;
    const lcs = [];

    function getMax(num1, num2) {
        return num1 > num2 ? num1 : num2;
    }

    for (let i = 0; i <= m; i ++) {
        lcs.push([]);
        for (let j = 0; j <= n; j ++) {
            if ((i === 0) || (j === 0)) lcs[i].push(0);
            else if (str1[i - 1] === str2[j - 1]) lcs[i].push(lcs[i - 1][j - 1] + 1);
            else lcs[i].push(getMax(lcs[i - 1][j], lcs[i][j - 1]));
        }
    }
    return lcs[m][n];
}


const input = ["abcabb","bacb"];
console.log(LCS(input));
