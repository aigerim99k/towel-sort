
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix) return [];
    let arr = [];
    let check = 1;
    for (let i = 0; i < matrix.length; i++) {
        if (check === 1) {
            for (let j = 0; j < matrix[i].length; j++) {
                arr.push(matrix[i][j]);
            }
            check = 0;
            continue;
        }
        if (check === 0) {
            for (let j = matrix[i].length - 1; j >= 0; j--) {
                arr.push(matrix[i][j]);
            }
            check = 1;
            continue;
        }
    }
    return arr;
}
