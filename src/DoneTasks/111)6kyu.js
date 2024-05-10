// Напишите метод, который принимает на вход массив последовательных (возрастающих) букв и возвращает недостающую букву в массиве.

// Вы всегда получите действительный массив. И всегда будет отсутствовать ровно одна буква. Длина массива всегда будет не менее 2.
// Массив всегда будет содержать буквы только в одном регистре.

// Пример:

// ['a','b','c','d','f'] -> 'e'
// ['b','d','e','f'] -> 'b'
// (Используйте английский алфавит из 26 букв!)

// Наслаждайтесь программированием и, пожалуйста, не забудьте проголосовать и оценить это ката! :-)

// Я также создал другие ката. Посмотрите, понравилось ли вам это ката!

function findMissingLetter(array) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let alphabetArray = alphabet.split("");
  const unicode = array[0].charCodeAt(0);
  if (unicode >= 65 && unicode <= 90) {
    alphabetArray = alphabet.toUpperCase().split("");
  }

  let searchedWord;

  for (let i = 0; i < array.length; i++) {
    const nextWordAlphabetIndex = alphabetArray.findIndex((el) => el === array[i]);

    if (array[i + 1] !== alphabetArray[nextWordAlphabetIndex + 1]) {
      searchedWord = alphabetArray[nextWordAlphabetIndex + 1];
      return searchedWord;
    }
  }
}

console.log(findMissingLetter(["O", "Q", "R", "S"]));
