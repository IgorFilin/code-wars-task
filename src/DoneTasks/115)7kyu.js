// Напишите метод (или функцию, в зависимости от языка), который преобразует строку
// в верблюжий регистр, то есть первая буква всех слов должна быть заглавной,
// а пробелы должны быть удалены.

String.prototype.camelCase = function () {
  //your code here
  const wordsArr = this.split(" ");
  let camelCaseWords = "";
  for (let i = 0; i < wordsArr.length; i++) {
    const word = wordsArr[i];
    if (word) {
      const camelCaseWord = word.slice(0, 1).toUpperCase() + word.slice(1, word.length);
      camelCaseWords += camelCaseWord;
    }
  }
  return camelCaseWords;
};

console.log("camel case word".camelCase());
