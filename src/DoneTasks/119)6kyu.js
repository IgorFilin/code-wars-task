// Арифметическая прогрессия определяется как прогрессия, в которой существует постоянная разница между последовательными членами заданного ряда чисел. Вам предоставлены последовательные элементы арифметической прогрессии.
// Однако есть одна загвоздка: ровно один член исходного ряда отсутствует в наборе чисел, которые вам были предоставлены. Остальная часть заданного ряда совпадает с исходным AP. Найдите недостающий член.

// Вам нужно написать функцию, которая получает список, размер списка всегда будет не менее 3 чисел. Отсутствующий член никогда не будет первым или последним.

// Пример
// findMissing([1, 3, 5, 9, 11]) == 7
// PS: Это пример вопроса из задачи инженера Facebook на interviewstreet. Мне показалось довольно забавным решать ее на бумаге с помощью математики, выводить алгоритм таким образом. Развлекайтесь!

// x = n+1 > n на n1 - n0 - условие истиности

function findMissing(list) {
  function calculationDifference() {
    const differenceFirstElements = Math.abs(list[1]) - Math.abs(list[0]);
    const differenceSecondElements = Math.abs(list[list.length - 1]) - Math.abs(list[list.length - 2]);
    return differenceFirstElements < differenceSecondElements ? differenceFirstElements : differenceSecondElements;
  }
  const difference = calculationDifference();

  for (let index = 0; index < list.length; index++) {
    if (list[index + 1] - list[index] !== difference) {
      return list[index] + difference;
    }
  }
}
console.log(findMissing([1, 3, 4]));
