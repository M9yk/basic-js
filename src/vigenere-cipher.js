const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

class VigenereCipheringMachine {
  characters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  reverse = false;

  constructor(value) {
    if (!(value || [...arguments].length < 1)) this.reverse = true;
  }
  encrypt(string, key) {
    if (
      [...arguments].length < 2 ||
      typeof [...arguments][0] !== "string" ||
      typeof [...arguments][1] !== "string"
    )
      throw new Error("Incorrect arguments!");
    let strArr = string.toUpperCase().split("");
    let i = 0;
    let keyArr = key.toUpperCase().split("");
    let cryptStr = [];

    for (let item of strArr) {
      if (this.characters.includes(item)) {
        let index =
          (this.characters.indexOf(item) + this.characters.indexOf(keyArr[i])) %
          this.characters.length;
        cryptStr.push(this.characters[index]);
        i += 1;
      } else {
        cryptStr.push(item);
      }

      if (i === keyArr.length) {
        i = 0;
      }
    }

    if (this.reverse) return cryptStr.reverse().join("");
    else return cryptStr.join("");
  }
  decrypt(string, key) {
    if (
      [...arguments].length < 2 ||
      typeof [...arguments][0] !== "string" ||
      typeof [...arguments][1] !== "string"
    )
      throw new Error("Incorrect arguments!");
    let strArr = string.split("");
    let i = 0;
    let keyArr = key.toUpperCase().split("");
    let cryptStr = [];
    for (let item of strArr) {
      if (this.characters.includes(item)) {
        let index =
          (this.characters.indexOf(item) -
            this.characters.indexOf(keyArr[i]) +
            this.characters.length) %
          this.characters.length;
        cryptStr.push(this.characters[index]);
        i += 1;
      } else {
        cryptStr.push(item);
      }
      if (i === keyArr.length) {
        i = 0;
      }
    }
    if (this.reverse) return cryptStr.reverse().join("");
    else return cryptStr.join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
