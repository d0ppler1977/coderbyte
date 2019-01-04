/*
Challenge
Have the function KnightJumps(str) read str which will be a string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board. The structure of str will be the following: "(x y)" which represents the position of the knight with x and y ranging from 1 to 8. Your program should determine the number of spaces the knight can move to from a given location. For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces from position x=4 and y=5. 

Advanced challenges are worth 15 points and you are not timed for them.
Sample Test Cases
Input:"(1 1)"

Output:2


Input:"(2 8)"

Output:3
*/

function KnightJumps(str) {
    const x = Number(str.substring(1, 2));
    const y = Number(str.substring(3, 4));
    const oX = [2, 1, -1, -2, -2, -1, 1, 2];
    const oY = [1, 2, 2, 1, -1, -2, -2, -1];
    let moves = 0;
    for (let i = 0; i <= 8; i ++) {
        const Xn = x + oX[i];
        const Yn = y + oY[i];
        if ((Xn >= 1) && (Yn >= 1) && (Xn <= 8) && (Yn <= 8)) moves ++;
    }
    return moves;
}

console.log(KnightJumps(process.argv[2]));
