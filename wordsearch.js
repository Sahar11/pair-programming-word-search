const transpose = require("../../d2/matrix_transposition");

const wordSearch = (letters, word) => {
  word = word.toUpperCase();
  const horizontalJoin = letters.map((ls) => ls.join(""));
  const verticalJoin = transpose(letters).map((ls) => ls.join(""));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  for (l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;
