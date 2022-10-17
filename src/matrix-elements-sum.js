const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  matrix.forEach((e) => {
    for (element of e) {
      sum += element;
    }
  });
  matrix.forEach((elem, index) => {
    for (ind in matrix[index]) {
      if (matrix[index][ind] === 0 && index < matrix.length - 1) {
        sum -= matrix[index + 1][ind];
      }
    }
  });
  return sum;
}

module.exports = {
  getMatrixElementsSum,
};
