/*
Challenge
Have the function BinarySearchTreeLCA(strArr) take the array of strings stored in strArr, 
which will contain 3 elements: the first element will be a binary search tree with all unique 
values in a preorder traversal array, the second and third elements will be two different values, 
and your goal is to find the lowest common ancestor of these two values. 
For example: if strArr is ["[10, 5, 1, 7, 40, 50]", "1", "7"] then this tree looks like the following: 

 

For the input above, your program should return 5 because that is the value of the node that is the 
LCA of the two nodes with values 1 and 7. You can assume the two nodes you are searching for 
in the tree will exist somewhere in the tree. 
*/
function BinarySearchTreeLCA(strArr) { 
    class Node {
        constructor(nodeIdx) {
            this.idx = nodeIdx;
            this.left = null;
            this.right = null;
        }
    }

    class BinarySearchTree {
        constructor() {
            this.root = null;
        }

        insert(node) {
            const newNode = new Node(node);
            if (this.root === null) this.root = newNode;
            else this.insertNode(this.root, newNode);
        }

        insertNode(root, newNode) {
            if (newNode.idx < root.idx) {
                if (root.left === null) root.left = newNode;
                else this.insertNode(root.left, newNode); // recurr until null is found
            } else {
                if (root.right === null) root.right = newNode;
                else this.insertNode(root.right, newNode); // recurr until null is found
            }
        }

        getRootNode() {
            return this.root;
        }

        search(node, idx) { // returns the child node of node if it exists
            if (node === null) return null;
            else if (idx < node.idx) return this.search(node.left, idx);
            else if (idx > node.idx) return this.search(node.right, idx);
            else return node;
        }

        lowestCommonAncestor(root, node1, node2) { // from the bottom and up with recursion
            if (root === null) return null;
            if ((root === node1) || (root === node2)) return root;
            
            const left = this.lowestCommonAncestor(root.left, node1, node2);
            const right = this.lowestCommonAncestor(root.right, node1, node2);

            if (left && right) return root;
            else if (left) return left;
            else return right;
        }
    }

    const nodes = convertToArray(strArr[0]);
    const node1 = strArr[1];
    const node2 = strArr[2];
    const BST = new BinarySearchTree();
    for (let i in nodes) {
        BST.insert(Number(nodes[i]));
    }

    const root =  BST.getRootNode();
    const n1 = BST.search(root, node1); // finds the first node i the tree
    const n2 = BST.search(root, node2); // the second
    // since we can asume that every given node exists, we simply call the function with no error handling
    const lca = BST.lowestCommonAncestor(root, n1, n2); // and finally the LCA

    return lca.idx;
}

// help function
function convertToArray(str) {
    str = str.replace("[", "").replace("]", "").replace(/ /g, "");
    return str.split(",").map(Number);
}

//const input = ["[10, 5, 1, 7, 40, 50]", "1", "7"];
//const input = ["[10, 5, 1, 7, 40, 50]", "5", "10"];
const input = ["[3, 2, 1, 12, 4, 5, 13]", "5", "13"];

console.log(BinarySearchTreeLCA(input));
