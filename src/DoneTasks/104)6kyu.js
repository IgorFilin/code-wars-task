// Напишите функцию persistence,
// которая принимает положительный параметр num и возвращает его мультипликативную устойчивость,
// которая представляет собой количество раз, которое вы должны умножить цифры в num,
// пока не достигнете одной цифры.

// Например (Ввод -> Выход):

// 39 --> 3 (потому что 3*9 = 27, 2*7 = 14, 1*4 = 4 и 4 имеет только одну цифру)
// 999 --> 4 (потому что 9*9*9 = 729,
// 7*2*9 = 126, 1*2*6 = 12 и, наконец, 1*2 = 2)
// 4 --> 0 (потому что 4 — это уже однозначное число)

function persistence(num, countRecurse = 0) {
  // code me
  if (num.toString().length === 1) return countRecurse;
  countRecurse += 1;
  const newNumArray = num.toString().split("");
  let resultNewNum = 1;
  for (const num of newNumArray) {
    resultNewNum *= num;
  }
  return persistence(resultNewNum, countRecurse);
}

console.log(persistence(39));

// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/solutions/javascript
