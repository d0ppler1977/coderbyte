function SymmetricTree(nodes) {
    const root = nodes.shift();
    const binaryTree = [root];
    let width = 2;
    let level = 1;
    while (nodes.length > 0) {
        binaryTree.push(nodes.shift() + "|");
        for (let i = 1; i < width; i ++) {
            binaryTree[level] += nodes.shift() + "|";
        }
        binaryTree[level] = binaryTree[level].substring(0, binaryTree[level].length - 1);
        level ++;
        width *= 2;
    }
    for (let i = 1; i <= level - 1; i ++) {
        const items = binaryTree[i].split("|");
        let ubound = items.length - 1;
        for (let j = 0; j < ubound; j++) {
            if (items[j] !== items[ubound]) return false;
            ubound --;
        }
    }
    return true;
}

const input = ["10", "2", "2", "#", "1", "1", "#"];
//const input = ["4", "3", "4"];

console.log(SymmetricTree(input));
