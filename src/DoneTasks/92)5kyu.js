// Мой друг Джон и я являемся членами клуба «Fat to Fit Club (FFC)».
// Джон обеспокоен, потому что каждый месяц публикуется список с весом участников,
// и каждый месяц он в списке последний, а это значит, что он самый тяжелый.

// Я тот, кто составляет список, поэтому я сказал ему: «Не волнуйтесь больше,
// я изменю порядок списка».
// Было решено придать числам «вес». Отныне вес числа будет равен сумме его цифр.

// Например, 99 будет иметь «вес» 18, 100 будет иметь «вес» 1,
//  поэтому в списке 100 будет стоять перед 99.

// Учитывая строку с весами членов FFC в нормальном порядке,
// можете ли вы упорядочить эту строку по «весам» этих чисел?

// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes:

// "100 180 90 56 65 74 68 86 99"

function orderWeight(strng) {
  // your code

  const sum = (str) => {
    let result = 0;
    let tumpler = false;

    for (let i of str.split("")) {
      result += +i;
    }
    return result;
  };
  const workArray = strng.split(" ");
  const sortArray = workArray.sort((a, b) => (sum(a) < sum(b) ? -1 : 1));

  for (let i = 0; i < sortArray.length; i++) {
    if (sortArray[i + 1] && sum(sortArray[i]) === sum(sortArray[i + 1])) {
      // [sortArray[i], sortArray[i + 1]] = [sortArray[i + 1], sortArray[i]];
    }
  }

  return sortArray.join(" ");
}
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));

// https://www.codewars.com/kata/55c6126177c9441a570000cc/train/javascript
