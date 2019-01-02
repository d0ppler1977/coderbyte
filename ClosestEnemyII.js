/*
Have the function ClosestEnemyII(strArr) read the matrix of numbers stored in strArr which will
 be a 2D matrix that contains only the integers 1, 0, or 2. 
 Then from the position in the matrix where a 1 is, return the number of spaces either left, right, down, or up you 
 must move to reach an enemy which is represented by a 2. 
 You are able to wrap around one side of the matrix to the other as well. 
 For example: if strArr is ["0000", "1000", "0002", "0002"] then this looks like the following: 

0 0 0 0
1 0 0 0
0 0 0 2
0 0 0 2 

For this input your program should return 2 because the closest enemy (2) is 2 spaces away 
from the 1 by moving left to wrap to the other side and then moving down once. 
The array will contain any number of 0's and 2's, but only a single 1. 
It may not contain any 2's at all as well, where in that case your program should return a 0. 
*/

function ClosestEnemyII(board) { 
    const size = board[0].length;
    const myPos = { x : -1, y : -1}
    const enemies = [];
    for (let i = 0; i < size; i ++) {
        let idx = board[i].indexOf("1");
        if (idx > -1) {
            myPos.x = i;
            myPos.y = idx;
        }
        idx = board[i].indexOf("2");
        if (idx > -1) {
            enemies.push({x : i, y : idx});
        }

    }

    if (enemies.length > 0) {
        enemies.forEach(enemy => enemy.distance = getDistance(myPos, enemy, size));
        return enemies.reduce((min, e) => e.distance <  min ? e.distance : min, enemies[0].distance);    
    } else {
        return 0;
    }
}

function getDistance(pos1, pos2, size) {
    const v1 = Math.abs(pos1.y - pos2.y);
    let targetY = pos1.y;
    let tempY = pos2.y;
    if (targetY > tempY) {
        const temp = tempY;
        tempY = targetY;
        targetY = temp;
    }
    let v2 = 0;
    while (tempY != targetY) {
        tempY ++;
        if (tempY >= size) tempY = 0;
        v2 ++;
    }

    const V = v2 < v1 ? v2 : v1;

    const h1 = Math.abs(pos1.x - pos2.x);
    let targetX = pos1.x;
    let tempX = pos2.x;
    if (targetX > tempX) {
        const temp = tempX;
        tempX = targetX;
        targetX = temp;
    }
    let h2 = 0;
    while (tempX != targetX) {
        tempX ++;
        if (tempX >= size) tempX = 0;
        h2 ++;
    }

    const H = h2 < h1 ? h2 : h1;
    return V + H;
}


// some test parameters:
//const input = ["0000", "1000", "0002", "0002"];
const input = ["10000", "00200", "00000", "00000", "00000"];
//const input = ["0000", "2010", "0000", "2002"];



console.log(ClosestEnemyII(input));