// Создайте функцию, которая принимает положительное целое число и возвращает следующее большее число, которое можно получить путем перестановки его цифр. Например:

//   12 ==> 21
//  513 ==> 531
// 2017 ==> 2071
// Если цифры не могут быть переставлены в большее число, верните -1 (или ноль в Swift, None в Rust):

//   9 ==> -1
// 111 ==> -1
// 531 ==> -1

function nextBigger(n) {
  //your code here
  const resultNumbersArray = [];

  function nextPermutation(array, numberValue) {
    // Находим самую длинную невозрастающую последовательность в массиве
    let i = array.length - 1;
    while (i > 0 && array[i - 1] >= array[i]) {
      i--;
    }

    // Если такой последовательности нет, значит это последняя перестановка
    if (i <= 0) {
      return false;
    }

    // Находим наибольший элемент в последовательности, который меньше элемента, стоящего за ней
    let j = array.length - 1;
    while (array[j] <= array[i - 1]) {
      j--;
    }

    // Меняем их местами
    let temp = array[i - 1];
    array[i - 1] = array[j];
    array[j] = temp;

    // Переворачиваем последовательность, начиная с элемента после i
    j = array.length - 1;
    while (i < j) {
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      i++;
      j--;
    }

    if (+array.join("") > numberValue) {
      return resultNumbersArray.push(+array.join(""));
    }

    return true;
  }

  let factorial = 1;
  const newNumber = n.toString().split("");

  for (let i = 1; i <= newNumber.length; i++) {
    factorial *= i;
  }

  for (let count = 1; count <= factorial; count++) {
    if (nextPermutation(newNumber, n)) {
      nextPermutation(newNumber, n);
    } else {
      break;
    }
  }

  return resultNumbersArray.length ? resultNumbersArray[0] : -1;
}

console.log(nextBigger(12));
