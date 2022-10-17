const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(array) {
  let arr = [];
  for (item of array) {
    if (item !== -1) {
      arr.push(item);
    }
  }
  arr.sort((a, b) => a - b);
  for (index in array) {
    if (array[index] === -1) {
      arr.splice(index, 0, -1);
    }
  }
  return arr;
}
module.exports = {
  sortByHeight,
};
