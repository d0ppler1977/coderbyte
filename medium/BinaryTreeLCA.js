/*
Challenge
Have the function BinaryTreeLCA(strArr) take the array of strings stored in strArr, which will contain 3 elements: the first element will be a binary tree with all unique values in a format similar to how a binary heap is implemented with NULL nodes at any level represented with a #, the second and third elements will be two different values, and your goal is to find the lowest common ancestor of these two values. For example: if strArr is 
["[12, 5, 9, 6, 2, 0, 8, #, #, 7, 4, #, #, #, #]", "6", "4"] then this tree looks like the following: 

 

For the input above, your program should return 5 because that is the value of the node that is the LCA of the two nodes with values 6 and 4. You can assume the two nodes you are searching for in the tree will exist somewhere in the tree. 
Sample Test Cases
Input:"[5, 2, 6, 1, #, 8, #]", "2", "6"

Output:5


Input:"[5, 2, 6, 1, #, 8, 12, #, #, #, #, #, #, 3, #]", "3", "12"

Output:12
*/
function BinaryTreeLCA(strArr) {
    const nodes = convertToArray(strArr[0]);
    const node1 = strArr[1];
    const node2 = strArr[2];

    const root = nodes.shift();
    if ((node1 === root) || (node2 === root)) return root;
    const binaryTree = [root];
    let width = 2; // representing the width of the current level
    let level = 1;
    
    // populating the binaryTree from user input (nodes[])
    while (nodes.length > 0) {
        binaryTree.push(nodes.shift() + "|");
        for(let i = 1; i < width; i++) {
            binaryTree[level] += nodes.shift() + "|";
        }
        binaryTree[level] = binaryTree[level].substring(0, binaryTree[level].length - 1);
        level ++;
        width *= 2; // the width for next level is twice as large as the previous
    }
    return getLowestCommonAncestor(binaryTree, node1, node2);
}

function getLowestCommonAncestor(binaryTree, node1, node2) {
    while (node1 !== node2) {
        const l1 = getLevel(binaryTree, node1);
        const l2 = getLevel(binaryTree, node2);
        // get Parent node for whoever node is deepest
        if (l1 > l2) node1 = getParent(binaryTree, node1);
        else node2 = getParent(binaryTree, node2);
    }
    return node1;
}

function getParent(binaryTree, node) {
    const level = getLevel(binaryTree, node);
    if (level < 2) return binaryTree[0]; // parent node is root, or node itself is root
    const nodes = binaryTree[level].split("|");
    const idx = Math.floor(nodes.indexOf(node) / 2);
    const parents = binaryTree[level - 1].split("|");
    return parents[idx];
}

function getLevel(binaryTree, node) {
    for (let i in binaryTree) {
        const nodes = binaryTree[i].split("|");
        if (nodes.indexOf(node) > -1) return i;
    }
    return -1;
}

// help functions
function convertToArray(str) {
    str = str.replace("[", "");
    str = str.replace("]", "");
    str = str.replace(/ /g, "");
    return str.split(",").map(String);
}


// sample cases
let input = ["[12, 5, 9, 6, 2, 0, 8, #, #, 7, 4, #, #, #, #]", "6", "4"];

//input = ["[5, 2, 6, 1, #, 8, 12, #, #, #, #, #, #, 3, #]", "3", "12"];
//input = ["[5, 2, 6, 1, #, 8, #]", "2", "6"];
console.log(BinaryTreeLCA(input));
