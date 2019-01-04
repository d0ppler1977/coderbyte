/*
Challenge
Have the function TetrisMove(strArr) take strArr parameter being passed which will 
be an array containing one letter followed by 12 numbers representing a 
Tetris piece followed by the fill levels for the 12 columns of the board. 
Calculate the greatest number of horizontal lines that can be completed when the 
piece arrives at the bottom assuming it is dropped immediately after being rotated and 
moved horizontally from the top. Tricky combinations of vertical and horizontal 
movements are excluded. The piece types are represented by capital letters.

 

For example, with an input of ["L","3","4","4","5","6","2","0","6","5","3","6","6"], the board will look something like this:

 

Your result should be 3 because the L piece can be rotated and dropped in column 6-7 which will complete 3 full rows of blocks.

Hard challenges are worth 15 points and you are not timed for them.
Sample Test Cases
Input:"I", "2", "4", "3", "4", "5", "2", "0", "2", "2", "3", "3", "3"

Output:2


Input:"O", "4", "3", "2", "3", "5", "1", "0", "1", "2", "4", "3", "4"

Output:0
*/

function TetrisMove(strArr) {
    const tetroid = strArr.shift();
    const shapes = {
        I : [[1, 1, 1, 1]],

        J : [[1, 1, 1, 1],
             [0, 0, 0, 1]],

        L : [[1, 1, 1, 1],
             [1, 0, 0, 0]],

        O : [[1, 1], 
             [1, 1]],

        S : [[0, 1, 1],
             [1, 1, 0]],

        T : [[1, 1, 1],
             [0, 1, 0]],

        Z : [[1, 1, 0],
             [0, 1, 1]]
    }
 
    function rotatePiece(piece) {
        const rotatedPiece = [];
        const height = piece.length;
        const width = piece[0].length;
        for (let i = 0; i < width; i ++) {
            rotatedPiece.push([]);
            for (let j = height - 1; j > -1; j --) {
                rotatedPiece[i].push(piece[j][i]);
            }
        }
        return rotatedPiece;
    }
    
    
    // creating an instance for every rotation of the piece
    const tetroids = [shapes[tetroid]];
    for (let i = 0; i < 3; i ++) {
        tetroids.push(rotatePiece(tetroids[i]));
    }

    //creating the board and sets the state from user input
    const board = [];
    const boardwidth = 12;
    const boardheight = 12;
    for (let i = 0; i < boardheight; i ++) {
        board.push([]);
        for( let j = 0; j < boardwidth; j ++) {
            if (boardheight - i <= strArr[j]) board[i].push(1);
            else board[i].push(0);
        }
    }

    function isLegal(board, tetroid, x, y) {
        const width = tetroid[0].length;
        const height = tetroid.length;
        for (let i = 0; i < height; i ++) {
            for (let j = 0; j < width; j ++) {
                if ((board[i + x][j + y] === 1) && (tetroid[i][j] === 1)) return false;
            }
        }
        return true;
    }

    function getScore(board, tetroid, x, y) {
        console.log("tetroid:");
        console.log(tetroid);
        let rows = 0;
        const height = tetroid.length;
        const pts = "111111111111";
        for (let i = 0; i < height; i ++) {
            console.log("At x:" + x + ", offsetX : " + i + ", y : " + y);
            const boardrow = board[i + x].join("");
            const piecerow = tetroid[i].join("").replace(/0/g, "");
            const row = boardrow.substring(0, y) + piecerow + boardrow.substring(y + piecerow.length);
            console.log("row : " + row + " (boardrow : " + boardrow + ", piecerow : " + piecerow + ")");
            console.log("---------------------");
            if (row === pts) rows ++;
        }
        return rows;
    }

    // for (let i = 0; i < boardheight; i ++) {
    //     for (let j = 0; j < boardwidth; j ++) {
    //         console.log("Checking X:" + i + ", Y:" + j);
    //         tetroids.forEach(function(t) {
    //             if (isLegal(board, t, i, j)) {
    //                 const score = getScore(board, t, i, j);
    //                 if (score > maxScore) maxScore = score;
    //             }
    //         });
    //     }
    // }
    let maxScore = 0;
    tetroids.forEach(function(t) {
        for (let i = 0; i <= boardheight - t.length; i ++) {
            for (let j = 0; j <= boardwidth - t[0].length; j ++) {
                console.log("Checking X:" + i + " - " + t.length + " , Y:" + j + " - " + t[0].length);
                if (isLegal(board, t, i, j)) {
                    const score = getScore(board, t, i, j);
                    if (score > maxScore) maxScore = score;
                }
            }
        }
    });

    drawPiece(board);
    return maxScore;

}


// for debugging purposes
function drawPiece(piece) {
    for (let i = 0; i < piece.length; i ++) {
        const drawString = piece[i].join("").replace(/0/g, " ").replace(/1/g, "*");
        const padding = "00".substring(0, 2 - i.toString().length) + i + " - ";
        console.log(padding + drawString);
    }
    console.log("     012345678901");
}


let input = ["L","3","4","4","5","6","2","0","6","5","3","6","6"];
//input = ["I", "2", "4", "3", "4", "5", "2", "0", "2", "2", "3", "3", "3"];
console.log(TetrisMove(input));