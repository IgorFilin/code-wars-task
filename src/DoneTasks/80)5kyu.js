// Переместите первую букву каждого слова в конец, а затем добавьте «ay» в конец слова. Оставьте знаки препинания нетронутыми.

// Примеры
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  //Code here
  const letters = {};
  let arrayWords = str.split(" ");
  let resultArray = arrayWords.map((el) => {
    if (el !== "!" || el !== "?" || el !== "," || el !== ".") {
      return (el = el.substring(1, el.length) + el[0] + "ay");
    } else return el;
  });
  return resultArray.join(" ");
}

console.log(pigIt("Pig latin is cool"));
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
