const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(string) {
  if (
    typeof +string === "number" &&
    typeof string === "string" &&
    0 < +string &&
    +string < 15
  ) {
    return Math.ceil(5730 * Math.log2(15 / Number(string)));
  } else {
    return false;
  }
}

module.exports = {
  dateSample,
};
