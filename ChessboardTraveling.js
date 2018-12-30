function ChessboardTraveling(str) { 
    const pattern = /\(\d+\s\d+\)\(\d+\s\d+\)/;

    if (pattern.test(str)) {
        // some ugly stringh parsing to read the x/y values
        const foo = str.split(")(");
        let bar = foo[0].split(" ");
        const x = bar[0].substr(1);
        const y = bar[1];
        bar = foo[1].split(" ");
        const a = bar[0];
        const b = bar[1].replace(")", "");
        const UBOUNDX = a - x + 1;
        const UBOUNDY = b - y + 1;
        const board = [[]];

        // setting up the board
        for (let i = 0; i < UBOUNDX; i ++) {
            board.push([]);
            for (let j = 0; j < UBOUNDY; j ++) {
                board[i].push();
                board[i][j] = 1;
            }
        }

        // Pascal's triangle
        for (let i = 1; i < UBOUNDX; i ++) {
            for (let j = 1; j < UBOUNDY; j ++) {
                board[i][j] = board[i][j - 1] + board[i - 1][j];
            }
        }
        return board[UBOUNDX - 1][UBOUNDY - 1];
    } else {
        return "Wrong format!";
    }
}

console.log(ChessboardTraveling(process.argv[2]));
