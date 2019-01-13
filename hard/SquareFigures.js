/*
Challenge
Have the function SquareFigures(num) read num which will be an integer. 
Your program should return the smallest integer that when squared has a length equal to num. 
For example: if num is 6 then your program should output 317 because 317^2 = 100489 
while 316^2 = 99856 which does not have a length of six. 

Hard challenges are worth 15 points and you are not timed for them.
Sample Test Cases
Input:2

Output:4


Input:1

Output:0
*/

function SquareFigures(num) { 
    let n = 0;
    Math.po
    while(Math.pow(n, 2).toString().length < num) n ++;
    return n;    
}

console.log(SquareFigures(process.argv[2]));
