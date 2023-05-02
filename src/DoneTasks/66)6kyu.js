// Даны два массива строк a1и a2возвращается отсортированный массив rв
// лексикографическом порядке, строки которого a1являются подстроками строк a2.

// Пример 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// возвращается["arp", "live", "strong"]

// Пример 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// возвращается[]

// Примечания:
// Массивы записываются в «общей» нотации. См. «Ваши тестовые примеры» для примеров на вашем языке.
// В Shell bash a1и a2являются строками. Возврат представляет собой строку, в которой слова разделены запятыми.
// Осторожно: на некоторых языках rдолжно быть без дубликатов.

function inArray(array1, array2) {
  let resultArray = [];
  for (let i = 0; i < array2.length; i++) {
    let wordArraySecond = array2[i];
    for (let j = 0; j < array1.length; j++) {
      let wordArrayFirst = array1[j];
      if (wordArraySecond.includes(wordArrayFirst)) {
        resultArray.push(wordArrayFirst);
      }
    }
  }
  resultArray = [...new Set(resultArray)];
  return resultArray.sort();
}

let arr1 = ["arp", "live", "strong"];
let arr2 = ["lively", "alive", "harp", "sharp", "armstrong"];

console.log(inArray(arr1, arr2));
