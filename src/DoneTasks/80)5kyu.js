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
