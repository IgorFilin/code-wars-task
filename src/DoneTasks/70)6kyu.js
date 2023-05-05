// В этой простой ката ваша задача — создать функцию, которая превращает строку в мексиканскую волну.
// Вам будет передана строка, и вы должны вернуть эту строку в виде массива, где заглавная буква означает стоящего человека.

function wave(str) {
  let resultArray = [];

  for (let i = 0; i < str.length; i++) {
    str = str.toLowerCase();
    str = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);

    resultArray.push(str);
  }

  return resultArray;
}

console.log(wave("hello"));
