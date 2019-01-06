/*
Challenge
Have the function QuickKnight(str) read str which will be a string consisting of the location 
of a knight on a standard 8x8 chess board with no other pieces on the board and 
another space on the chess board. 
The structure of str will be the following: "(x y)(a b)" where (x y) represents the position of 
the knight with x and y ranging from 1 to 8 and (a b) represents some other space on the 
chess board with a and b also ranging from 1 to 8. Your program should determine the 
least amount of moves it would take the knight to go from its position to position (a b). 
For example if str is "(2 3)(7 5)" then your program should output 3 because that is the 
least amount of moves it would take for the knight to get from (2 3) to (7 5) on the chess board. 

Hard challenges are worth 15 points and you are not timed for them.
Sample Test Cases
Input:"(1 1)(8 8)"

Output:6


Input:"(2 2)(3 3)"

Output:2
*/

function QuickKnight(str) {
    class Graph {
        constructor() {
            this.neighbours = [];
        }
        addPath(u, v) {
            if (this.neighbours[u] === undefined) this.neighbours[u] = [];
            this.neighbours[u].push(v);
            if (this.neighbours[v] === undefined) this.neighbours[v] = [];
            this.neighbours[v].push(u);
        }
    }

    // BFS algorithm
    function getShortestPath(graph, startNode, targetNode) {
        const queue = [ startNode ];
        const visited = { startNode: true };
        let tail = 0;
        const predecessor =  {};
        while (tail < queue.length) {
            let currentNode = queue[tail];
            tail ++;

            // adding every possible path from current locvation
            const currentNodeX = currentNode.toString().substring(0, 1);
            const currentNodeY = currentNode.toString().substring(1, 2);
            for (let i = 0; i <= 8; i ++) {
                const Xn = Number(currentNodeX) + oX[i];
                const Yn = Number(currentNodeY) + oY[i];
                const neighbour = Xn.toString() + Yn.toString();
                if ((Xn >= 1) && (Yn >= 1) && (Xn <= 8) && (Yn <= 8)) {
                    graph.addPath(currentNode, neighbour);
                }
            }
            const neighbours = graph.neighbours[currentNode];
            for (let i = 0; i < neighbours.length; i++) {
                const neighbourNode = neighbours[i];
                if (!visited[neighbourNode]) {
                    visited[neighbourNode] = true;
                    if (neighbourNode === targetNode) {
                        const path = [ targetNode ];
                        let moves = 1;
                        while (currentNode !== startNode) {
                            path.push(currentNode);
                            currentNode = predecessor[currentNode];
                            moves ++;
                        } 
                        path.push(currentNode);
                        path.reverse();
                        //return path.join("-");
                        return moves;
                    }
                    predecessor[neighbourNode] = currentNode;
                    queue.push(neighbourNode);    
                }
            }
        }
    }
    const knightMoves = new Graph();
    const x = str.substring(1, 2);
    const y = str.substring(3, 4);
    const targetX = str.substring(6, 7);
    const targetY = str.substring(8, 9);
    const oX = [2, 1, -1, -2, -2, -1, 1, 2];
    const oY = [1, 2, 2, 1, -1, -2, -2, -1];

    const moves = getShortestPath(knightMoves, x.toString() + y.toString(), targetX.toString() + targetY.toString());
    return moves;
}

console.log(QuickKnight(process.argv[2]));
