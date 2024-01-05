// Выполните функцию, определяющую счет руки в карточной игре Блэкджек (он же 21).

// Функция получает массив строк, которые представляют каждую карту в руке
//  («2», «3», ..., «10», «J», «Q», «K» или «A») и должна возвращать результат. счет руки (целое число).

// Правила подсчета очков:
// Цифровые карты имеют номинальную стоимость (от 2 до 10). Джек,
// Дама и король считаются за 10. Туз может быть засчитан как за 1, так и за 11.

// Возвращает наибольшее количество карточек, которое меньше или равно 21.
//  Если нет очков меньше или равных 21, верните наименьшее количество очков, превышающее 21.

// ["A"]                           ==>  11
// ["A", "J"]                      ==>  21
// ["A", "10", "A"]                ==>  12
// ["5", "3", "7"]                 ==>  15
// ["5", "4", "3", "2", "A", "K"]  ==>  25

function scoreHand(cards) {
  // TODO
  const scoreStrategy = {
    A: {
      single: 11,
      couple: 1,
      isSingle: true,
    },
    J: 10,
    Q: 10,
    K: 10,
  };
  let countA;
  let result = 0;
  let returnResult = 0;
  cards.forEach((element) => {
    debugger;
    if (result > 21) {
      returnResult = result;
      return;
    }
    if (isNaN(element)) {
      if (element === "A") {
        if (!countA) {
          countA = cards.filter((el) => el === "A").length;
        }
        if (countA === 2 && cards.length === 2) {
          if (scoreStrategy[element].isSingle) {
            scoreStrategy[element].isSingle = false;
            result += scoreStrategy[element].single;
          } else {
            result += scoreStrategy[element].couple;
          }
        } else if (countA === 1 && cards.length > 1) {
          result += scoreStrategy[element].single;
        } else if (countA === 1 && cards.length === 1) {
          result += scoreStrategy[element].single;
        } else {
          result += scoreStrategy[element].couple;
        }
      } else {
        result += scoreStrategy[element];
      }
    } else {
      result += +element;
    }
    returnResult = result;
  });

  return returnResult;
}

console.log(scoreHand(["5", "K", "2", "7", "A"]));

// https://www.codewars.com/kata/534ffb35edb1241eda0015fe/train/javascript
