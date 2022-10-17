const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let cnt = 1;
  let newArr = [];
  let arr = str.split("");
  while (arr.length !== 0) {
    while (arr[0] === arr[1]) {
      cnt += 1;
      arr.shift();
    }
    if (cnt !== 1) {
      newArr.push(cnt);
      newArr.push(arr[0]);
      arr.shift();
      cnt = 1;
    } else {
      newArr.push(arr[0]);
      arr.shift();
    }
  }
  return newArr.join("");
}
module.exports = {
  encodeLine,
};
