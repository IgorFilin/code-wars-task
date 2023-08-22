// В этом Ката вам будет дан массив целых чисел, элементы которого имеют как отрицательное, так и положительное значение,
// за исключением одного целого числа, которое либо только отрицательное, либо только положительное. Ваша задача будет найти это целое число.

// Примеры:

// [1, -1, 2, -2, 3] => 3

// 3не имеет соответствующего отрицательного внешнего вида

// [-3, 1, 2, 3, -1, -4, -2] => -4

// -4не имеет соответствующего положительного внешнего вида

// [1, -1, 2, -2, 3, 3] => 3

// (только положительное или только отрицательное целое число может встречаться более одного раза)

// Удачи!

function solve(arr) {
  const pattern = /^-([0-9]+)$/;
  const decrementArray = [];
  const incrementArray = [];
  let result;
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    if (pattern.test(arr[i])) {
      decrementArray.push(arr[i]);
    } else {
      incrementArray.push(arr[i]);
    }
  }

  let iterateArrayFirst;

  let iterateArraySecond;

  if (decrementArray.length > incrementArray.length) {
    iterateArrayFirst = decrementArray;
    iterateArraySecond = incrementArray;
  } else {
    iterateArrayFirst = incrementArray;
    iterateArraySecond = decrementArray;
  }

  console.log(iterateArrayFirst);
  console.log(iterateArraySecond);
  for (let i = 0; i < iterateArrayFirst.length; i++) {
    for (let j = 0; j < iterateArraySecond.length; j++) {
      if (pattern.test(iterateArrayFirst[i])) {
        if (
          iterateArrayFirst[i].toString().slice(1) ===
          iterateArraySecond[j].toString()
        ) {
          iterateArrayFirst[j] = 0;
        }
      } else {
        if (
          iterateArrayFirst[i].toString() ===
          iterateArraySecond[j].toString().slice(1)
        ) {
          iterateArrayFirst[j] = 0;
        }
      }
    }
  }

  return iterateArrayFirst.filter((el) => el !== 0)[0];
}
console.log(solve([1, -1, 2, -2, 3, 3]));
