// Определите метод/функцию, которая удаляет из заданного массива целых чисел все значения,
// содержащиеся во втором массиве.

function Foo(integer, values) {
  let resultArray = [];
  for (let i = 0; i < integer.length; i++) {
    const firstEl = integer[i];
    if (!values.includes(firstEl)) {
      resultArray.push(firstEl);
    }
  }
  return resultArray;
}

console.log(Foo([1, 1, 2, 3, 1, 2, 3, 4], [1, 3]));
