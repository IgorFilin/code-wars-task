// Создайте функцию, которая принимает римскую цифру в качестве аргумента и возвращает
//  ее значение в виде десятичного целого числа. Вам не нужно проверять форму римской цифры.

// Современные римские цифры записываются путем выражения каждой десятичной цифры числа,
//  подлежащего кодированию, отдельно, начиная с самой левой цифры и пропуская любые 0.
// Таким образом, 1990 год отображается как «MCMXC» (1000 = M, 900 = CM, 90 = XC),
//  а 2008 год отображается как «MMVIII» (2000 = MM, 8 = VIII). В римской цифре 1666 года
// «MDCLXVI»
// каждая буква используется в порядке убывания.

// IV = 4 VI = 5 MCXLIV = 1000 + 100 + 10

function solution(roman) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1_000,
  };

  let resultSum = 0;
  let skipNextIteration = false;
  const romanArray = roman.split("");

  for (let i = 0; i < romanArray.length; i++) {
    if (skipNextIteration) {
      skipNextIteration = false;
      continue;
    }
    if (romanArray[i + 1] && romanNumerals[romanArray[i]] < romanNumerals[romanArray[i + 1]]) {
      resultSum += romanNumerals[romanArray[i + 1]] - romanNumerals[romanArray[i]];
      skipNextIteration = true;
    } else {
      resultSum += romanNumerals[romanArray[i]];
    }
  }

  return resultSum;
}

console.log(solution("MCXLIV"));
