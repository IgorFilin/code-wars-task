

// Ваша команда пишет новый модный текстовый редактор, и вам поручили внедрить нумерацию строк.
//
//     Напишите функцию, которая принимает список строк и возвращает каждую строку с правильным номером перед ним.
//
//     Нумерация начинается с 1. Формат n: строка. Обратите внимание на двоеточие и пробел между ними.
//
//     Примеры: (Ввод --> Вывод)
//
//     [] --> []
//     ["а", "б", "в"] --> ["1: а", "2: б", "3: в"]

var number=function(array){
  //your awesome code here
  return array.map((el,i) =>`${i + 1}: ${el}` )
}

console.log(number(["а", "б", "в"]))

