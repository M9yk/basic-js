const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(string, options) {
  let additionArray = [];
  let array = [];
  let newString = string;
  let i = 0;
  const defaultSeparators = { separator: "+", additionSeparator: "|" };
  if (typeof options["addition"] !== "undefined") {
    if (typeof options["additionRepeatTimes"] !== "undefined") {
      while (i < options.additionRepeatTimes) {
        additionArray.push(`${options.addition}`);
        i += 1;
      }
      if (typeof options["additionSeparator"] !== "undefined") {
        newString += additionArray.join(`${options.additionSeparator}`);
      } else {
        newString += additionArray.join(defaultSeparators.additionSeparator);
      }
    } else {
      newString += options.addition;
    }
  }
  i = 0;
  if (typeof options["repeatTimes"] !== "undefined") {
    while (i < options.repeatTimes) {
      array.push(newString);
      i += 1;
    }
    if (typeof options["separator"] !== "undefined") {
      return array.join(`${options.separator}`);
    } else {
      return array.join(`${defaultSeparators.separator}`);
    }
  } else {
    return newString;
  }
}

module.exports = {
  repeater,
};
