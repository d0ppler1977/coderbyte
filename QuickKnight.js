/*
Challenge
Have the function QuickKnight(str) read str which will be a string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board and another space on the chess board. The structure of str will be the following: "(x y)(a b)" where (x y) represents the position of the knight with x and y ranging from 1 to 8 and (a b) represents some other space on the chess board with a and b also ranging from 1 to 8. Your program should determine the least amount of moves it would take the knight to go from its position to position (a b). For example if str is "(2 3)(7 5)" then your program should output 3 because that is the least amount of moves it would take for the knight to get from (2 3) to (7 5) on the chess board. 

Hard challenges are worth 15 points and you are not timed for them.
Sample Test Cases
Input:"(1 1)(8 8)"

Output:6


Input:"(2 2)(3 3)"

Output:2
*/

function QuickKnight(str) {
    const x = Number(str.substring(1, 2));
    const y = Number(str.substring(3, 4));
    const targetX = Number(str.substring(6, 2));
    const targety = Number(str.substring(8, 2));
    const oX = [2, 1, -1, -2, -2, -1, 1, 2];
    const oY = [1, 2, 2, 1, -1, -2, -2, -1];
    // todo : create node class, graph class, and a BFS search algorithm





    let moves = 0;
    for (let i = 0; i <= 8; i ++) {
        const Xn = x + oX[i];
        const Yn = y + oY[i];
        if ((Xn >= 1) && (Yn >= 1) && (Xn <= 8) && (Yn <= 8)) moves ++;
    }
    return moves;
}

console.log(QuickKnight(process.argv[2]));