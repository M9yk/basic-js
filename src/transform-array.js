const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(array) {
  if (Array.isArray(array) === false) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const settings = [
    "--double-next",
    "--discard-prev",
    "--discard-next",
    "--double-prev",
  ];
  let newArr = array.slice();
  let index = 0;
  while (index < newArr.length) {
    index += 1;
    switch (newArr[index]) {
      case "--double-next":
        if (
          index < newArr.length - 1 &&
          !settings.includes(newArr[index + 1])
        ) {
          newArr.splice(index + 1, 0, newArr[index + 1]);
          index += 1;
        }

        break;

      case "--discard-prev":
        if (index > 0 && !settings.includes(newArr[index - 1])) {
          newArr.splice(index - 1, 1);
        }
        break;
      case "--discard-next":
        if (
          index < newArr.length - 1 &&
          !settings.includes(newArr[index + 1])
        ) {
          newArr.splice(index + 1, 1);
          index -= 1;
        }

        break;
      case "--double-prev":
        if (index > 0 && !settings.includes(newArr[index - 1])) {
          newArr.splice(index, 1, newArr[index - 1]);
        }

        break;
    }
  }
  index = 0;
  while (index < newArr.length) {
    if (settings.includes(newArr[index])) {
      newArr.splice(index, 1);
      index -= 1;
    }
    index += 1;
  }
  if (array.length < 1) return array;
  return newArr;
}

module.exports = {
  transform,
};
