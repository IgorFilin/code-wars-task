// Возвращает количество (количество) гласных в заданной строке.

// Мы будем рассматривать a, e, i, o, uкак гласные для этой Ката (но не y).

// Входная строка будет состоять только из строчных букв и/или пробелов.

function getCount(str) {
  const wordsArray = ["a", "e", "i", "o", "u"];
  const resultArray = [];
  str.split("").forEach((el) => {
    if (wordsArray.includes(el)) {
      resultArray.push(el);
    }
  });
  return resultArray.length;
}

console.log(getCount("abracadabra"));
