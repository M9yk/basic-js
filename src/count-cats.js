const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(array) {
  let cnt = 0;
  for (let item of array) {
    for (let x of item) {
      if (x === "^^") {
        cnt += 1;
      }
    }
  }
  return cnt;
}

module.exports = {
  countCats,
};
