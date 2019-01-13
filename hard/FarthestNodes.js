"use strict";
function FarthestNodes(strArr) { 
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
        const queue = [ { node: startNode, steps : 0 } ];
        const visited = { startNode: true };
        let tail = 0;
        while (tail < queue.length) {
            const currentNode = queue[tail].node;
            const steps = queue[tail].steps;
            tail ++;
            const neighbours = graph.neighbours[currentNode];
            for (let i = 0; i < neighbours.length; i++) {
                const neighbourNode = neighbours[i];
                if (!visited[neighbourNode]) {
                    visited[neighbourNode] = true;
                    if (neighbourNode === targetNode) {
                        return steps + 1;
                    }
                    queue.push({ node: neighbourNode, steps: steps + 1 });
                }
            }
        }
    }

    const graph = new Graph();
    const NUMBER_OF_PATHS = strArr.length;
    const nodes = [];
    for (let i = 0; i < NUMBER_OF_PATHS; i++) {
        const node1 = strArr[i].substring(0, 1);
        const node2 = strArr[i].substring(2, 3);
        graph.addPath(node1, node2);
        if (nodes.indexOf(node1) < 0) nodes.push(node1);
        if (nodes.indexOf(node2) < 0) nodes.push(node2);
    }

    let max_step = 0;
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            const current_step = getShortestPath(graph, nodes[i], nodes[j]);
            if (current_step > max_step) max_step = current_step;
            //console.log("Shortest distance from " + nodes[i] + " to " + nodes[j] + " is " + current_step);
        }
    }

    return max_step;
}

const inputParam = ["b-e","b-c","c-d","a-b","e-f"];

console.log(FarthestNodes(inputParam));
