// Учитывая массив n x n, верните элементы массива, расположенные от самых крайних элементов
//  до среднего элемента, перемещаясь по часовой стрелке.

// массив = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// улитка(массив) #=> [1,2,3,6,9,8,7,4,5]
// Для лучшего понимания последовательно следуйте номерам следующего массива:

// массив = [
//   [1,2,3],
//   [8,9,4],
//   [7,6,5]
// ]
// массив = [
// [1,  2,  3,  4,  5],
// [6,  7,  8,  9,  10],
// [11, 12, 13, 14, 15],
// [16, 17, 18, 19, 20],
// [21, 22, 23, 24, 25]

// [ 1,  2,  3,  4],
// [ 6,  7,  8,  9],
// [11, 12, 13, 14],
// [16, 17, 18, 19],
// ]
// улитка(массив) #=> [1,2,3,4,5,6,7,8,9]
// Это изображение проиллюстрирует ситуацию более четко:

// ПРИМЕЧАНИЕ. Идея не в том, чтобы сортировать элементы от наименьшего значения к наибольшему;
//  идея состоит в том, чтобы пройти по двумерному массиву по схеме «раковина улитки»
//   по часовой стрелке.

// ПРИМЕЧАНИЕ 2. 0x0 (пустая матрица) представлена ​​как пустой массив внутри массива [[]].

snail = function (array) {
  // enjoy
  const resultList = [];

  let proxyArray = new Proxy(array, {
    get(target, prop, value) {
      if (prop === "pop" && !target.length) {
        return function () {
          return [];
        };
      }
      return target[prop];
    },
  });

  while (proxyArray.length) {
    // Первый ряд
    resultList.push(...proxyArray.shift());

    // Последние элементы крайние со всем подмассивов
    for (const el of proxyArray) {
      resultList.push(el.pop());
    }

    // Нижний ряд
    resultList.push(...proxyArray.pop().reverse());

    // Поворот улитки
    for (let i = proxyArray.length - 1; i !== -1; i--) {
      resultList.push(proxyArray[i].shift());
    }
  }
  return resultList;
};

console.log(
  snail([
    // [1, 2, 3, 2],
    // [8, 9, 4, 3],
    // [7, 6, 5, 4],
    // [7, 6, 5, 4],
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5],
  ])
);
