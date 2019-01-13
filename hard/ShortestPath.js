"use strict";
function ShortestPath(strArr) { 
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
            const neighbours = graph.neighbours[currentNode];
            for (let i = 0; i < neighbours.length; i++) {
                const neighbourNode = neighbours[i];
                if (!visited[neighbourNode]) {
                    visited[neighbourNode] = true;
                    if (neighbourNode === targetNode) {
                        const path = [ targetNode ];
                        while (currentNode !== startNode) {
                            path.push(currentNode);
                            currentNode = predecessor[currentNode];
                        } 
                        path.push(currentNode);
                        path.reverse();
                        return path.join("-");
                    }
                    predecessor[neighbourNode] = currentNode;
                    queue.push(neighbourNode);    
                }
            }
        }
        return "-1";
    }

    const graph = new Graph();
    const NUMBER_OF_NODES = parseInt(strArr[0]);
    const STARTNODE = strArr[1];
    const TARGETNODE = strArr[NUMBER_OF_NODES];
    let numberOfPaths = 0;
    for (let i = NUMBER_OF_NODES + 1; i < strArr.length; i ++) {
        //console.log("Adding path " + strArr[i]);
        let node = strArr[i].split("-");
        graph.addPath(node[0], node[1]);
        numberOfPaths ++;
    }
    //console.log("numberOfPaths : " + numberOfPaths);
    if (numberOfPaths <= 0) return -1;

    return getShortestPath(graph, STARTNODE, TARGETNODE);
}
const inputParam = ["4","X","Y","Z","W","X-Y","Y-Z","X-W"];

console.log(ShortestPath(inputParam));
