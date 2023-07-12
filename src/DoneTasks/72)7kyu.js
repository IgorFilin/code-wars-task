// Вам дан массив целых чисел нечетной длины , в котором все они одинаковы, кроме одного единственного числа.

// Завершите метод, который принимает такой массив и возвращает это единственное другое число.

// Входной массив всегда будет действительным! (нечетная длина >= 3)

function stray(numbers) {
  let result;
  for (let i = 0; i < numbers.length; i++) {
    let tempCount = numbers[0];
    if (numbers[i] !== tempCount) {
      if (numbers[i] === numbers[i + 1]) {
        result = tempCount;
        return result;
      } else result = numbers[i];
    }
  }
  return result;
}

console.log(stray([2, 1, 1]));
