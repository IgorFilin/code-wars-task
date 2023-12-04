// Завершите метод greatProduct,
//  чтобы он нашел наибольшее произведение пяти последовательных цифр в заданной строке цифр.

// Например:

// GreatestProduct("123834539327238239583") // должно вернуть 3240
// Входная строка всегда содержит более пяти цифр.

// Адаптировано из проекта Эйлера.

function greatestProduct(input) {
  const compositionArray = [];
  let temp;
  while (input.length >= 5) {
    for (let i = 0; i <= 3; i++) {
      if (i === 0) {
        temp = input[0];
      }
      temp *= input[i + 1];
    }
    compositionArray.push(temp);
    input = input.slice(1);
  }
  return Math.max(...compositionArray);
}

console.log(greatestProduct("123834539327238239583"));
