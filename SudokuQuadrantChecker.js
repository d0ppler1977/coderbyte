function SudokuQuadrantChecker(strArr) {
    const board = [[]]; // the complete sudoko grid
    const quadrant = [[]]; // the quadrant which holds value wether it's ok or not.
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            quadrant.push([]);
            quadrant[i].push("0");
        }
    }

    // populating the board with the value from user input
    for (let i = 0; i < 9; i++) {
        strArr[i] = strArr[i].replace("(", "");
        strArr[i] = strArr[i].replace(")", "");
        const row = strArr[i].replace(/,/g, "");
        for (let j = 0; j < 9; j++) {
            board.push([]);
            board[i].push(row[j]);
        }
    }

    // checking the rows
    for (let i = 0; i < 9; i++) {
        check(board[i].join(""), i, 0);
    }

    // checking the columns
    for (let i = 0; i < 9; i++) {
        let myCol = "";
        for (let j = 0; j < 9; j++) {
            myCol += board[j][i];
        }
        check(myCol, i, 1);
    }
    
    // creating a string for each quadrant and checks them
    for (let i = 0; i < 3; i ++) {
        for (let j = 0; j < 3; j++) {
            const strQuadrant = getNumbersFromQuadrant(i,j);
            //console.log("quadrant " + i + "," + j + " : " + strQuadrant);
            if (!check(strQuadrant, 0, 2)) quadrant[i][j] = "1";
        }
    }

    // check() will update the qudrant directly if type is ROW or COLUMN
    function check(str, num, type) {
        let check_retval = true;
        const IS_ROW = 0;
        const IS_COL = 1;
        for (let i = 0; i < 9; i++) {
            if (str[i] !== "x") {
                const searchstring = str.substring(0,i) + str.substring(i + 1);
                //console.log("searching for " + str[i] + " in " + searchstring);
                for (let j = 0; j < 8; j ++) {
                    if (str[i] === searchstring[j]) {
                        check_retval = false;
                        let x = 0;
                        let y = 0;
                        if (type === IS_ROW) {
                            x = parseInt(num / 3, 10);
                            y = parseInt(i / 3, 10);
                            quadrant[x][y] = "1";
                        } else if (type === IS_COL) {
                            x = parseInt(i / 3, 10);
                            y = parseInt(num / 3, 10);
                            quadrant[x][y] = "1";
                        } // else it's the quadrant check (type = 2), which this function returns false so it can tag it from the quadrant check
                    }
                }
            }
        }
        return check_retval;
    }

    function getNumbersFromQuadrant(x, y) {
        x *= 3;
        y *= 3;
        const x2 = x + 3;
        const y2 = y + 3;
        let retval = "";
        for (let i = x; i < x2; i++) {
            for (let j = y; j < y2; j++) {
                retval += board[i][j];
            }
        }
        return retval;
    }

    let quadrantError = 0;
    let retval = "";

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            quadrantError ++;
            if (quadrant[i][j] === "1") retval += quadrantError + ",";
        }
    }
    retval = retval.substring(0, retval.length - 1);
    if(retval !== "") return retval;
    else return "legal";
}
const inputParam = ["(1,2,3,4,5,6,7,8,9)","(x,x,x,x,x,x,x,x,x)","(6,x,5,x,3,x,x,4,x)","(2,x,1,1,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,9)"];

console.log(SudokuQuadrantChecker(inputParam));
