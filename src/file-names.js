const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(array) {
  let k = 1;
  let i = 0;
  for (let x = 0; x < array.length; x++) {
    while (i < array.length) {
      if (array[x] === array[i] && i != x) {
        array.splice(i, 1, `${array[x]}(${k})`);
        k += 1;
      }
      i += 1;
    }
    k = 1;
    i = 0;
  }
  return array;
}

module.exports = {
  renameFiles,
};
