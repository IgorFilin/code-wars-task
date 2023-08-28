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
  const firstPattern = new RegExp(`${markers[0]}(.*?)${}`);
  const secondPattern = new RegExp(`${markers[0]}(.*?)${markers[1]}`);
  const temp = input.match(firstPattern);
  return temp;
}

console.log(
  solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
);
