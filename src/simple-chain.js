const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */

const chainMaker = {
  string: [],
  getLength() {
    return this.string.length;
  },
  addLink(value) {
    if (arguments.length < 1) this.string.push("( )");
    else this.string.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position <= 0 || isNaN(position) || position > this.string.length - 1) {
      this.string.length = 0;
      throw new Error("You can't remove incorrect link!");
    }
    this.string = this.string.filter((el, index) => index != position - 1);
    return this;
  },
  reverseChain() {
    this.string = this.string.reverse();
    return this;
  },
  finishChain() {
    let finishString = [...this.string];
    this.string.length = 0;
    return finishString.join("~~");
  },
};

module.exports = {
  chainMaker,
};
