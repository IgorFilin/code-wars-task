// Рассмотрите слово "abode". Мы видим, что буква a находится в позиции 1и bнаходится в позиции 2. В алфавите aи bтакже находятся в позициях 1и 2.
// Обратите также внимание на то, что dand ein abodeзанимают позиции, которые они должны были бы занимать в алфавите, а именно позиции 4и 5.

// Учитывая массив слов, вернуть массив количества букв, которые занимают свои позиции в алфавите для каждого слова. Например,

// solve(["abode","ABc","xyzD"]) = [4, 3, 1]

function solve(arr) {
  //code
  const words = "abcdefghijklmnopqrstuvwxyz";
  return arr.reduce((acc, curr) => {
    let count = 0;
    curr.split("").forEach((el, index) => {
      if (curr[index].toLowerCase() === words[index]) {
        count += 1;
      }
    });
    acc.push(count);
    return acc;
  }, []);
}

console.log(solve(["abode", "ABc", "xyzD"]));
