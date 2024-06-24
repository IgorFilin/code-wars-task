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
  const resultVariants = []
  const variantNumbers = [
    ['1','2','3'],
    ['4','5','6'],
    ['7','8','9'],
    ['0'],
  ]
  const arr = observed.split(' ')

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < variantNumbers.length; j++) {
        if(variantNumbers[j].includes(arr[i])) {

        }
    }
  }



}

console.log(getPINs('8'));
// изучить пример
// function findNumbers(matrix, startX, startY) {
//   const rows = matrix.length;
//   if (rows === 0) return []; // Пустая матрица

//   const cols = matrix[0].length;
//   if (cols === 0) return []; // Матрица с пустыми строками

//   const visited = new Array(rows).fill(false).map(() => new Array(cols).fill(false));
//   const queue = [[startX, startY]];
//   const numbersFound = [];

//   while (queue.length > 0) {
//       const [x, y] = queue.shift();

//       // Проверяем, что текущая ячейка не посещалась и что координаты в пределах матрицы
//       if (!visited[x][y]) {
//           visited[x][y] = true;
//           numbersFound.push(matrix[x][y]);

//           // Проверяем соседние ячейки (вверх, вниз, влево, вправо)
//           if (x > 0) queue.push([x - 1, y]); // вверх
//           if (x < rows - 1) queue.push([x + 1, y]); // вниз
//           if (y > 0) queue.push([x, y - 1]); // влево
//           if (y < cols - 1) queue.push([x, y + 1]); // вправо
//       }
//   }

//   return numbersFound;
// }

// // Пример использования
// const matrix = [
//   ['1','2','3'],
//   ['4','5','6'],
//   ['7','8','9'],
//   ['0']
// ];

// const startX = 1;
// const startY = 1;

// const result = findNumbers(matrix, startX, startY);
// console.log('Найденные числа:', result); 