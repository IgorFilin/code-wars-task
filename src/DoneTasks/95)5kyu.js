// Завершите функцию scramble(str1, str2),
// которая возвращает true, если часть символов str1 можно переставить так,
// чтобы она соответствовала str2, в противном случае возвращает false.

// Примечания:

// Будут использоваться только строчные буквы (a-z).
// Никакие знаки препинания и цифры не будут включены.
// Необходимо учитывать производительность.

// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(str1, str2) {
  const obj = {};

  for (const word of str1) {
    obj[word] = obj[word] ? obj[word] + 1 : 1;
  }

  for (let i = 0; i < str2.length; i++) {
    if (!obj[str2[i]]) {
      return false; // Наличие
    }

    if (obj[str2[i]]) {
      obj[str2[i]] = obj[str2[i]] - 1;
    }
  }

  return true;
}
console.log(scramble("javscripts", "javascript"));

// https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript
