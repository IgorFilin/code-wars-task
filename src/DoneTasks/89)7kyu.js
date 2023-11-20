// По заданному списку строк квадратной матрицы найдите произведение главной диагонали.

function mainDiagonalProduct(mat) {
  let result = 1;

  for (let i = 0; i < mat.length; i++) {
    if (mat[i][i]) {
      result *= mat[i][i];
      continue;
    }
  }

  return result;
}

console.log(
  mainDiagonalProduct([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

// https://www.codewars.com/kata/551204b7509063d9ba000b45/train/javascript
