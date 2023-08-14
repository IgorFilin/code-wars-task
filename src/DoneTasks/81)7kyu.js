// Вам дадут слово. Ваша задача — вернуть средний символ слова.
// Если длина слова нечетная, вернуть средний символ. Если длина слова четная, верните средние 2 символа.

// #Примеры:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

function getMiddle(s) {
  if (s.length % 2 !== 0) {
    return s[(s.length - 1) / 2];
  } else {
    const str = s[Math.floor(s.length / 2 - 1)] + s[Math.ceil(s.length / 2)];
    return str;
  }
}

console.log(getMiddle("testing"));
