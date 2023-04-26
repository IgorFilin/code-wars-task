// Основная идея состоит в том,
//  чтобы подсчитать все встречающиеся символы в строке.
//   Если у вас есть строка типа aba, результат должен быть {'a': 2, 'b': 1}.

// Что делать, если строка пуста?
//  Тогда результатом должен быть пустой литерал объекта, {}.

function count(string) {
  if (string.length > 0) {
    let result = {};
    string.split("").forEach((item) => {
      if (item in result) {
        result[item] += 1;
      } else result[item] = 1;
    });
    return result;
  } else return {};
}

console.log(count("abaasdmbb"));
