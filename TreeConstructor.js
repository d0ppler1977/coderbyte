/*
Challenge
Have the function TreeConstructor(strArr) take the array of strings stored in strArr, 
which will contain pairs of integers in the following format: (i1,i2), 
where i1 represents a child node in a tree and the second integer i2 signifies that it is the parent of i1. 
For example: if strArr is ["(1,2)", "(2,4)", "(7,2)"], then this forms the following tree: 

 

which you can see forms a proper binary tree. Your program should, in this case, return the 
string true because a valid binary tree can be formed. If a proper binary tree cannot be 
formed with the integer pairs, then return the string false. All of the integers within 
the tree will be unique, which means there can only be one node in the tree with the 
given integer value. 
Sample Test Cases
Input:"(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"

Output:"true"


Input:"(1,2)", "(3,2)", "(2,12)", "(5,2)"

Output:"false"
*/

function TreeConstructor(strArr) {
    const l = strArr.length;
    const binaryTree = [{}];
    for (let i in strArr) {
        const pair = getPair(strArr[i]);
        const parent = pair[1];
        const child = pair[0];

        // if the current child has two parents, return false, since it's an invalid binary tree
        const treeParent = getParentOfChild(binaryTree, child);
        if ((treeParent !== "") && (treeParent !== parent)) return false;

        const idx = getIdxOfNode(binaryTree, parent);
        if(idx < 0) {
            binaryTree.push({ parent : parent, child1 : child });
        } else {
            if (binaryTree[idx].child2) return false;
            else binaryTree[idx].child2 = child;
        }
    }
    return true;
}

function getParentOfChild(binaryTree, child) {
    for (let i in binaryTree) {
        if ((binaryTree[i].child1 === child) || (binaryTree[i].child2 === child)) return binaryTree[i].parent;
    }
    return "";
}

function getIdxOfNode(binaryTree, parent) {
    for (let i in binaryTree) {
        if (binaryTree[i].parent === parent) return i;
    }
    return -1;
}

function getPair(str) {
    return str.replace("(", "").replace(")", "").split(",").map(Number);
}

// sample test inputs
const input = ["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"];
//const input = ["(1,2)", "(2,4)", "(7,2)"];


console.log(TreeConstructor(input));
