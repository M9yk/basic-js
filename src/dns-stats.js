const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};
  domains.forEach((element) => {
    let elemArr = element.split(".").reverse();
    let i = 1;
    while (i < elemArr.length + 1) {
      let elem = elemArr.slice(0, i).join(".");

      if (obj.hasOwnProperty(`.${elem}`)) {
        obj[`.${elem}`] += 1;
      } else {
        obj[`.${elem}`] = 1;
      }
      i += 1;
    }
  });
  return obj;
}

module.exports = {
  getDNSStats,
};
