// Завершите решение так, чтобы он удалил весь текст,
//  следующий за любым из переданных маркеров комментариев. Любые пробелы в конце строки также следует удалить.

// Пример:

// Учитывая входную строку:

// apples, pears # and bananas
// grapes
// bananas !apples
// Ожидаемый результат будет следующим:

// apples, pears
// grapes
// bananas

function solution(input, markers) {
  const firstPattern = new RegExp(`${markers[0]}.*?(\\n|$)`, "g");
  const secondPattern = new RegExp(`${markers[1]}.*?(\\n|$)`, "g");

  const firstStr = input.match(firstPattern)[0];
  const secondStr = input.match(secondPattern)[0];
  console.log(firstStr);
  let result = input
    .replace(firstStr, "\n")
    .replace(/\s+\n/g, "\n")
    .replace(secondStr, "");
  return result.replace(/\n /g, "\n").trim();
}

console.log(
  solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
);

//https://www.codewars.com/kata/51c8e37cee245da6b40000bd/train/javascript
