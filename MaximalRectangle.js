function MaximalRectangle(strArr) { 
    const board = [[]];
    const cols = strArr[0].length;
    const rows = strArr.length;
    
    // populating the board from user input
    for (let i = 0; i < rows; i ++) {
        board.push([]);
        for (let j = 0; j < cols; j ++) {
            board[i].push();
            board[i][j] = strArr[i].substr(j, 1);
        }
    }
    
    // create a class so I can neatly access the different dimensions
    class Shape {
        constructor(width, height) {
            this.width = width;
            this.height = height;
        }

        get size() {
            return this.width * this.height;
        }
    }

    // creates an array of the class Shape to hold every possible shape of the given rectangle
    const myShapes = [];
    for (let i = 1; i <= cols; i++) {
        for (let j = 1; j <= rows; j++) {
            myShapes.push(new Shape(i, j));
        }
    }

    // sorting the array of the size ascending
    myShapes.sort(sortBySize);

    // moving every size around the given area to see if it contains only 1's, and breaks out as soon as it hits
    for (let i = 0; i < myShapes.length; i++) {
        const columnsToTravel = cols - myShapes[i].width;
        const rowsToTravel = rows - myShapes[i].height;
        for (let j = 0; j <= columnsToTravel; j++) {
            for (let k = 0; k <= rowsToTravel; k++) {
                const myRectangle = getRectangle(j, k, cols - columnsToTravel, rows - rowsToTravel);
                if (myRectangle.indexOf("0") < 0) return myShapes[i].size;
            }
        }
    }

    function sortBySize(a, b) {
        if (a.size > b.size) return -1;
        if (a.size < b.size) return 1;
        return 0;
    }

    function getRectangle(x, y, sizeX, sizeY) {
        const x1 = x + sizeX;
        const y1 = y + sizeY;
        let retval = "";
        for (let i = y; i < y1; i++) {
            for (let j = x; j < x1; j++) {
                retval += board[i][j];
            }
        }
        return retval;
    }
    return 0;           
}
const inputParam = ["10100", "10111", "11111", "10010"];

console.log(MaximalRectangle(inputParam));
