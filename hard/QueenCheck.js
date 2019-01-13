/*
Challenge
Have the function QueenCheck(strArr) read strArr which will be an array consisting of the 
locations of a Queen and King on a standard 8x8 chess board with no other pieces on the board. 
The structure of strArr will be the following: ["(x1,y1)","(x2,y2)"] with (x1,y1) representing 
the position of the queen and (x2,y2) representing the location of the king with x and y 
ranging from 1 to 8. Your program should determine if the king is in check based on the 
current positions of the pieces, and if so, return the number of spaces it can move to in 
order to get out of check. If the king is not in check, return -1. 
For example: if strArr is ["(4,4)","(6,6)"] then your program should output 6. 
Remember, because only the queen and king are on the board, if the queen is checking 
the king by being directly adjacent to it, technically the king can capture the queen. 

Hard challenges are worth 15 points and you are not timed for them.
Sample Test Cases
Input:"(1,1)","(1,4)"

Output:3


Input:"(3,1)","(4,4)"

Output:-1
*/

function QueenCheck(strArr) {
    const queen = getPos(strArr[0]);
    const king = getPos(strArr[1]);
    let moves = 0;

    // first check if the king is in check
    if (!isCheck(queen, king)) return -1;

    // check if king's move in all direction is legal (not in check and inside board)
    for (let i = -1; i < 2; i ++) {
        for (let j = -1; j < 2; j ++) {
            if ((i !== 0) || (j !== 0)) { // the king MUST move, so offset x/y on 0 is not legal
                king.x += i;
                king.y += j;
                if (isOnBoard(king)) {
                    if (!isCheck(queen, king)) moves ++;
                }
                // resetting king
                king.x -= i;
                king.y -= j;
            }
        }
    }
    return moves;
}

function isCheck(queenPos, kingPos) {
    // if king captures the queen
    if ((queenPos.y === kingPos.y) && (queenPos.x === kingPos.x)) return false;
    // vertical
    if (queenPos.y === kingPos.y) return true;
    // horizontal
    if (queenPos.x === kingPos.x) return true;
    // diagonal
    const vDiff = Math.abs(queenPos.y - kingPos.y);
    const hDiff = Math.abs(queenPos.x - kingPos.x);
    if (vDiff === hDiff) return true;

    return false;
}

function isOnBoard(pos) {
    if ((pos.x > 0) && (pos.x < 9) && (pos.y > 0) && (pos.y < 9)) return true;
    else return false;
}

function getPos(str) {
    const pos = str.replace("(", "").replace(")", "").split(",");
    return { x:Number(pos[0]), y:Number(pos[1]) };
}

const input = ["(1,1)","(1,4)"];
console.log(QueenCheck(input));
