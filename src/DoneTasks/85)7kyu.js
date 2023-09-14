// Учитывая строку, вам необходимо постепенно
//  объединить первую букву слева и первую букву справа и «1»,
//   затем вторую букву слева и вторую букву справа и «2» и так далее.

// Если длина строки нечетная, отбросьте центральный элемент.

// Например:

// charConcat("abcdef")    == 'af1be2cd3'
// charConcat("abc!def")   == 'af1be2cd3' // same result

function charConcat(str) {
  //your code here
  if (str.length % 2 !== 0) {
    console.log("123");
    str =
      str.slice(0, Math.round(str.length / 2 - 1)) +
      str.slice(Math.round(str.length / 2));
  }
  let count = 1;
  let string = str;
  let revertString = str.split("").reverse().join("");
  const temptObj = {};
  const resultArray = [];
  for (let i = 0; i < string.length / 2; i++) {
    temptObj[string[i]] = "";
  }
  console.log(temptObj);
  for (let i = 0; i < revertString.length / 2; i++) {
    temptObj[string[i]] = revertString[i];
  }
  for (let [key, value] of Object.entries(temptObj)) {
    resultArray.push(key);
    resultArray.push(value);
    resultArray.push(count);
    count++;
  }
  return resultArray.join("");
}

console.log(charConcat("t8v99qda3utlp8cpajw26kf1"));
// https://www.codewars.com/kata/55147ff29cd40b43c600058b/train/javascript
