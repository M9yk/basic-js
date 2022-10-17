const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  let arr = num.toString().split("");
  let newArr = [];
  let k = 0;
  let max = 0;
  let i = 0;
  while (i < arr.length) {
    newArr = arr.filter((el, index) => index != i);
    console.log(newArr);
    k = parseInt(newArr.join(""));
    console.log(k);
    if (k > max) max = k;
    i++;
  }
  return max;
}

module.exports = {
  deleteDigit,
};
