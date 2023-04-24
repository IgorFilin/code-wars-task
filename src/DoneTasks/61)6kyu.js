// Завершите решение так,
//  чтобы оно разбило строку на пары из двух символов.
//  Если строка содержит нечетное количество символов,
//  то отсутствующий второй символ последней пары должен быть заменен символом подчеркивания ('_').

function solution(str) {
  let resultArray = [];
  if (str !== "") {
    let arr = str.split("");
    for (let i = 0; i < arr.length; i += 2) {
      if (arr.length % 2 === 0) {
        resultArray.push(arr[i] + arr[i + 1]);
      } else {
        if (arr[i + 1] === undefined) arr[i + 1] = "_";
        resultArray.push(arr[i] + arr[i + 1]);
      }
    }
  } else return "";
  return resultArray;
}

console.log(solution("abc"));
