function SymmetricMatrix(strArr) {
    function areArraysIdentical(arr1, arr2) {
        const size = arr1.length;
        for (let i = 0; i < size; i ++) {
            for (let j = 0; j < size; j ++) {
                if (arr1[i][j] !== arr2[i][j]) return false;
            }
        }
        return true;
    }

    function transposeMatrix(arr) {
        const size = arr.length;
        const transMatrix = [];
        for (let i = 0; i < size; i ++) {
            transMatrix.push([]);
            for (let j = 0; j < size; j ++) {
                transMatrix[i].push(arr[j][i]);
            }
        }
        return transMatrix;
    }

    const matrix = [];
    let row = 0;
    matrix.push([]);
    strArr.forEach(function(e) {
        if (e === "<>") {
            matrix.push([]);
            row ++;
        } else {
            matrix[row].push(e);
        }
    });

    if (matrix.length !== matrix[0].length) return "not possible";

    const trans = transposeMatrix(matrix);

    return areArraysIdentical(matrix, trans) ? "symmetric" : "not symmetric";
}
const input = ["1","2","4","<>","2","1","1","<>","-4","1","-1"];
console.log(SymmetricMatrix(input));