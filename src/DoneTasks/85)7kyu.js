// Учитывая строку, вам необходимо постепенно
//  объединить первую букву слева и первую букву справа и «1»,
//   затем вторую букву слева и вторую букву справа и «2» и так далее.

// Если длина строки нечетная, отбросьте центральный элемент.

// Например:

// charConcat("abcdef")    == 'af1be2cd3'
// charConcat("abc!def")   == 'af1be2cd3' // same result

// function charConcat(str) {
//   //your code here
//   if (str.length % 2 !== 0) {
//     console.log("123");
//     str =
//       str.slice(0, Math.round(str.length / 2 - 1)) +
//       str.slice(Math.round(str.length / 2));
//   }
//   let count = 1;
//   let string = str;
//   let revertString = str.split("").reverse().join("");
//   let tempArray = [];
//   const temptObj = {};
//   const resultArray = [];
//   for (let i = 0; i < string.length / 2; i++) {
//     tempArray.push({ [string[i]]: "" });
//   }
//   console.log(tempArray);
//   for (let i = 0; i < revertString.length / 2; i++) {
//     tempArray[i];
//   }
//   for (let [key, value] in Object.entries(temptObj)) {
//     resultArray.push(key);
//     resultArray.push(value);
//     resultArray.push(count);
//     count++;
//   }
//   return resultArray.join("");
// }

function charConcat(str) {
  //your code here
  let workString = str;
  if (workString.length % 2 !== 0) {
    const indexToRemove = Math.round(str.length / 2) - 1;
    const part1 = workString.slice(0, indexToRemove);
    const part2 = workString.slice(indexToRemove + 1);
    workString = part1 + part2;
  }

  const middleNumber = workString.length / 2;
  let resultStr = "";
  let count = 0;
  for (let i = 0; i < middleNumber; i++) {
    resultStr +=
      workString[i] + workString[middleNumber * 2 - 1 - count] + (count + 1);
    count++;
  }
  return resultStr;
}

console.log(charConcat("2g2u0"));
// https://www.codewars.com/kata/55147ff29cd40b43c600058b/train/javascript
