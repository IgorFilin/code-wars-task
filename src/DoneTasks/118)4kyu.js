// Хорошо, детектив, один из наших коллег успешно заметил нашу жертву, грабителя Робби.
// Мы последовали за ним на секретный склад, где и предполагаем найти все украденные вещи.
//  Дверь этого склада защищена электронным кодовым замком. К сожалению, наш шпион не уверен в ПИН-коде, который он видел,
//  когда Робби ввел его. Он заметил PIN-код 1357, но также сказал, что это возможно,
//  что каждая из увиденных им цифр на самом деле могла быть другой соседней цифрой (по горизонтали или вертикали, но не по диагонали).
//   Например. вместо 1 это может быть 2 или 4. А вместо 5 это может быть 2, 4, 6 или 8. Он также упомянул, что знает такие замки.
//    Вы можете ввести неограниченное количество неправильных PIN-кодов,
//    они никогда окончательно не заблокируют систему и не подадут сигнал тревоги.
//    Вот почему мы можем опробовать все возможные (*) варианты. * возможно в смысле:
//    самого наблюдаемого PIN-кода и всех его вариантов с учетом соседних цифр. Можете ли вы помочь нам найти все эти варианты?
//  Было бы неплохо иметь функцию, возвращающую массив (или список в Java).

function getPINs(observed) {
  // TODO: This is your job, detective!
  const resultVariants = [];

  const variantNumbers = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["", "0", ""],
  ];
  const arr = observed.split(" ");

  function findNumbers(matrix, startX, startY) {
    const queue = [[startX, startY]];
    const numbersFound = [];

    queue.push([startX - 1, startY]);
    queue.push([startX + 1, startY]);
    queue.push([startX, startY - 1]);
    queue.push([startX, startY + 1]);

    while (queue.length > 0) {
      const [x, y] = queue.shift();
      if (matrix[x] && matrix[x][y]) {
        if (matrix[x][y] !== "") {
          numbersFound.push(matrix[x][y]);
        }
      }
    }

    return numbersFound;
  }

  function searchCoords(number, matrix) {
    const coords = {
      x: null,
      y: null,
    };

    matrix.forEach((arr, index) => {
      if (arr.includes(String(number))) {
        coords.x = index;
        coords.y = arr.findIndex((el) => el === String(number));
      }
    });

    return coords;
  }

  function searchAllCombination() {}

  const coords = searchCoords();
}

console.log(getPINs("369"));
