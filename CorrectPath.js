/* Challenge
Have the function CorrectPath(str) read the str parameter being passed, which will represent
 the movements made in a 5x5 grid of cells starting from the top left position. 
 The characters in the input string will be entirely composed of: r, l, u, d, ?. 
 Each of the characters stand for the direction to take within the grid, 
 for example: r = right, l = left, u = up, d = down. Your goal is to determine what 
 characters the question marks should be in order for a path to be created to go from the 
 top left of the grid all the way to the bottom right without touching previously travelled 
 on cells in the grid. 

For example: if str is "r?d?drdd" then your program should output the final correct string 
that will allow a path to be formed from the top left of a 5x5 grid to the bottom right. 
For this input, your program should therefore return the string rrdrdrdd. There will only 
ever be one correct path and there will always be at least one question mark within the 
input string. 


Sample Test Cases
Input:"???rrurdr?"

Output:"dddrrurdrd"


Input:"drdr??rrddd?"

Output:"drdruurrdddd"
 
*/

function CorrectPath(str) { 
    const qmarks    = str.replace(/[^\?]/g, "").length;
    const maxCombos = Math.pow(4, qmarks); // number of possible combinations
    const up        = 0;
    const down      = 1;
    const right     = 2;
    const left      = 3;

    // putting every possible combo into combos array
    const combos = [];
    for (let i = 0; i < maxCombos; i++) {
        const combo = lpad(i.toString(4), qmarks); // converts i to a base 4 number into a string with leading zeroes corresponding to amount of question marks
        combos.push(combo);
    }

    for (let i in combos) {
        const directions = combos[i].split("");
        let path = "";
        const length = str.length;
        for (let j = 0; j < length; j ++) {
            if (str[j] === "?") path += getDirection(directions.pop());
            else path += str[j];
        }

        if (isPathGood(path)) return path;
    }

    function isPathGood(path) {
        const grid = [ [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,1] ];
        let x = 4;
        let y = 4;
        const length = path.length;
        for (let i = 0; i < length; i ++) {
            let d = path[i];
            switch (d) {
                case "r" :
                    x --;
                    break;
                case "l" :
                    x ++;
                    break;
                case "d" :
                    y --;
                    break;
                case "u" :
                    y ++;
            }
            
            // check if we're out of the grid:
            if ((y < 0) || (y > 4) || (x < 0) || (x > 4)) return false;
            
            // checking if we've been at this square before:
            if (grid[x][y] === 1) return false;

            // tagging the square we're at
            grid[x][y] = 1;
        }
        if ((x === 0) && (y === 0)) return true;
        else return false;
    }

    // help functions:
    function lpad(num, size) {
        const length = size - num.length;
        let pad = "";
        for (let i = 0; i < length; i ++) {
            pad += "0";
        }
        return pad + String(num);
    }

    function getDirection(numdir) {
        switch (Number(numdir)) {
            case up    : return "u";
            case down  : return "d";
            case right : return "r";
            case left  : return "l";
        }
    }

    return false;
}

console.log(CorrectPath(process.argv[2]));
