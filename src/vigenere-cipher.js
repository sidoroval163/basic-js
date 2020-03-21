class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(input, key) {
    if (!input || !key) throw new Error();

    const formatted_input = input.toUpperCase().split("");
    const formatted_key = key.toUpperCase().split("");

    const result = formatted_input.map(letter => {
      const letter_code = letter.charCodeAt(0) - 65;
      let result = letter;

      if (letter_code >= 0 && letter_code <= 25) {
        result = String.fromCharCode(
          ((letter_code + formatted_key[0].charCodeAt(0) - 65) % 26) + 65
        );
        formatted_key.push(formatted_key.shift());
      }
      return result;
    });

    !this.direct && result.reverse();

    return result.join("");
  }

  decrypt(str, key) {
    if (!str || !key) {
      throw new Error();
    }
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    str = str.toUpperCase();
    key = key.toUpperCase();
    let currentIndex = 0;
    let keyLength = key.length;
    let decryptedLetter = "";
    for (let i in str) {
      if (chars.indexOf(str[i]) < 0) {
        decryptedLetter += str[i];
        continue;
      }
      let currentLetterIndexInAlfabet = chars.indexOf(str[i]);
      let keyLetterIndexInAlfabet = chars.indexOf(
        key[currentIndex % keyLength]
      );
      decryptedLetter =
        decryptedLetter +
        chars[
          (currentLetterIndexInAlfabet - keyLetterIndexInAlfabet + 26) % 26
        ];
      currentIndex += 1;
    }

    if (!this.direct) {
      return decryptedLetter
        .split("")
        .reverse()
        .join("");
    }
    return decryptedLetter;
  }
}

module.exports = VigenereCipheringMachine;
