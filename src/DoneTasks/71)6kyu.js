// Ваша задача — отсортировать заданную строку.
// Каждое слово в строке будет содержать одно число.
// Это число — позиция, которую слово должно занимать в результате.

// Примечание. Цифры могут быть от 1 до 9. Таким образом, первым словом будет 1 (а не 0).

// Если входная строка пуста, вернуть пустую строку.
// Слова во входной строке будут содержать только допустимые последовательные числа.

function order(words) {
  if (words.length === 0) return "";
  let tempResultArray = [];
  let tempObj = {};
  let tempWorkArray = words.split(" ");
  for (let i = 0; i < tempWorkArray.length; i++) {
    let wordArray = tempWorkArray[i].split("");
    for (let j = 0; j < wordArray.length; j++) {
      if (!isNaN(wordArray[j])) {
        let x = wordArray[j];
        tempObj[x] = wordArray.join("");
      }
    }
  }
  for (const key in tempObj) {
    tempResultArray.push(tempObj[key]);
  }
  return tempResultArray.join(" ");
}

console.log(order("is2 Thi1s T4est 3a"));
