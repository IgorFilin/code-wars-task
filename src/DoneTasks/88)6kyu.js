// Найдите сумму цифр всех чисел от 1 до N(включая оба конца).

function twistedSum(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < i.toString().length; j++) {
      result += parseInt(i.toString()[j]);
    }
  }
  return result;
}

console.log(twistedSum(999));
