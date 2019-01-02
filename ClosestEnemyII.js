function ClosestEnemyII(board) { 
    const l = board[0].length;
    const myPos = { x : -1, y : -1}
    const enemies = [];
    for (let i = 0; i < l; i ++) {
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
        enemies.forEach(enemy => enemy.distance = getDistance(myPos, enemy, l));
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
        //console.log("Target Y : " + targetY + ", tempY : " + tempY);
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
        //console.log("Target X : " + targetX + ", tempX : " + tempX);
        h2 ++;
    }

    const H = h2 < h1 ? h2 : h1;
    return V + H;
}


// some test parameters:
//const input = ["0000", "1000", "0002", "0002"];
const input = ["10000", "00000", "00000", "00000", "00000"];
//const input = ["0000", "2010", "0000", "2002"];



console.log(ClosestEnemyII(input));