const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(array) {
  let arrOfNames = [];
  let teamName = "";
  if (Array.isArray(array)) {
    for (item of array) {
      if (typeof item === "string") {
        arrOfNames.push(item.trim().toLowerCase());
      }
    }
  } else {
    return false;
  }
  arrOfNames.sort();
  for (item of arrOfNames) {
    teamName += item[0];
  }
  return teamName.toUpperCase();
}

module.exports = {
  createDreamTeam,
};
