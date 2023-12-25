// Жадность — это игра в кости, в которую играют пятью шестигранными игральными кубиками.
//  Ваша миссия, если вы решите ее принять, — выполнить бросок в соответствии с этими правилами.
//   Вам всегда будет предоставлен массив с пятью значениями шестигранных кубиков.

//  Три единицы => 1000 очков
//  Три шестерки => 600 очков
//  Три пятёрки => 500 очков
//  Три четверки => 400 очков
//  Три тройки => 300 очков
//  Три двойки => 200 очков
//  Одна 1 => 100 очков
//  Одна 5 => 50 баллов
// Один кубик можно посчитать только один раз в каждом броске. Например, данная цифра «5» может учитываться только как часть тройки (которая дает 500 очков) или как отдельные 50 очков, но не то и другое в одном броске.

// Пример оценки

//  Оценка броска
//  --------- ------------------
// 5 1 3 4 1 250: 50 (для 5) + 2 * 100 (для 1)
// 1 1 1 3 1 1100: 1000 (для трех единиц) + 100 (для остальных 1)
// 2 4 4 5 4 450: 400 (за три четверки) + 50 (за 5)
// В некоторых языках можно изменить входные данные функции. Это то, чего вам никогда не следует делать. Если вы измените ввод,
// вы не сможете пройти все испытания.

function score(dice) {
  let resultScore = 0;
  const pattern = {
    1: { count: 3, score: 1000, solo: 100 },
    6: { count: 3, score: 600 },
    5: { count: 3, score: 500, solo: 50 },
    4: { count: 3, score: 400 },
    3: { count: 3, score: 300 },
    2: { count: 3, score: 200 },
  };
  const resultObj = {};
  for (let i = 0; i < dice.length; i++) {
    if (resultObj[dice[i]]) resultObj[dice[i]] += 1;
    else resultObj[dice[i]] = 1;
  }
  for (const key in resultObj) {
    if (pattern[key].count === resultObj[key]) {
      resultScore += pattern[key].score;
    } else if (resultObj[key] > pattern[key].count) {
      const arr = [3, resultObj[key] - 3];
      resultScore += pattern[key].score;
      if (arr[1] !== 3) {
        if (pattern[key].solo) {
          for (let i = 0; i < arr[1]; i++) {
            resultScore += pattern[key].solo;
          }
        }
      } else {
        resultScore += pattern[key].score;
      }
    } else {
      if (pattern[key].solo) {
        for (let i = 0; i < resultObj[key]; i++) {
          resultScore += pattern[key].solo;
        }
      }
    }
  }
  return resultScore;
}

console.log(score([1, 5, 1, 3, 4]));

// https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript
// Решено
