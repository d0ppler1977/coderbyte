/*
Challenge
Have the function MaxHeapChecker(arr) take arr which represents a heap data structure 
and determine whether or not it is a max heap. A max heap has the property that all 
nodes in the heap are either greater than or equal to each of its children. 
For example: if arr is [100,19,36,17] then this is a max heap and your program should 
return the string max. If the input is not a max heap then your program should return 
a list of nodes in string format, in the order that they appear in the tree, that 
currently do not satisfy the max heap property because the child nodes are larger 
than their parent. 
For example: if arr is [10,19,52,13,16] then your program should return 19,52. 

Another example: if arr is [10,19,52,104,14] then your program should return 19,52,104 

Hard challenges are worth 15 points and you are not timed for them.
Sample Test Cases
Input:73,74,75,7,2,107

Output:74,75,107


Input:1,5,10,2,3,10,1

Output:5,10
*/

function MaxHeapChecker(nodes) {
    const root = String(nodes.shift());
    const binaryTree = [root];
    let width = 2;
    let level = 1;
    while (nodes.length > 0) {
        binaryTree.push(nodes.shift() + "|");
        for (let i = 1; i < width; i ++) {
            if (nodes.length > 0) {
                binaryTree[level] += nodes.shift() + "|";
            } else {
                binaryTree[level] += "-1|";
            }
        }
        binaryTree[level] = binaryTree[level].substring(0, binaryTree[level].length - 1);
        level ++;
        width *= 2;
    }
    let retval = "";
    // no need to check lowest level because they are all leaf nodes
    for (let level = 0; level < binaryTree.length - 1; level ++) {
        const node = binaryTree[level].split("|");
        for (let idx = 0; idx < node.length; idx ++) {
            const parent = getChildren(binaryTree, level, idx, node[idx]);
            if (parent.value < parent.child1) retval += parent.child1 + ",";
            if (parent.value < parent.child2) retval += parent.child2 + ",";
        }
    }
    retval = retval.substring(0, retval.length - 1);
    if (retval === "") return "max";
    else return retval;
}

function getChildren(binaryTree, parentLevel, parentIdx, parentValue) {
    const childLevel = parentLevel + 1;
    const child1Idx = (parentIdx) * 2;
    const child2Idx = (parentIdx) * 2 + 1;
    const level = binaryTree[childLevel].split("|");
    let child1 = level[child1Idx];
    let child2 = level[child2Idx];
    if(!child1) child1 = -1;
    if(!child2) child2 = -1;
    return { value : Number(parentValue) , child1 : Number(child1), child2 : Number(child2) };
}
//const input = [104,90,52,10,14];
const input = [73,74,75,7,2,107];

console.log(MaxHeapChecker(input));
