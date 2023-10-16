// Напишите функцию с именем first_non_repeating_letter,
// которая принимает на вход строку и возвращает первый символ,
//  который не повторяется нигде в строке.

// Например, если на входе задано значение 'stress',
//  функция должна вернуть значение 't', поскольку буква t встречается в строке
//  только один раз и встречается в строке первой.

// В качестве дополнительной проблемы прописные и строчные
// буквы считаются одним и тем же символом , но функция должна возвращать правильный
// регистр для начальной буквы. Например, ввод 'sTreSS'должен вернуть 'T'.

// Если строка содержит все повторяющиеся символы ,
//  она должна возвращать пустую строку ( "") или None— см. примеры тестов.

// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e

function firstNonRepeatingLetter(s) {
  // Add your code here
  const arr = [];
  const resultObj = {};
  let letter;
  for (let i = 0; i < s.length; i++) {
    if (s[i].toLowerCase() in resultObj) {
      resultObj[s[i].toLowerCase()] += 1;
    } else {
      resultObj[s[i].toLowerCase()] = 1;
    }
    if (!arr.includes(s[i])) {
      arr.push(s[i]);
    }
  }
  console.log(resultObj);
  for (let i = 0; i < arr.length; i++) {
    if (resultObj[arr[i].toLowerCase()] === 1) {
      return arr[i];
    }
  }
  return "";
}

console.log(firstNonRepeatingLetter("stress"));
