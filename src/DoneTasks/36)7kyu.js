// Вам нужно написать функцию, которая принимает строку в качестве первого параметра. Эта строка будет строкой слов.
//
//     Затем вы должны использовать второй параметр, который будет целым числом, чтобы найти соответствующее слово в заданной строке. Первое слово будет представлено 0.
// Когда у вас есть найденная строка, вы, наконец, собираетесь умножить на нее третий предоставленный параметр, который также будет целым числом. Вы дополнительно должны добавить дефис между каждым словом.
//
//     Пример
//
// modifyMultiply('This is a string',3,5)
// Должен вернуться
//"string-string-string-string-string"
// Поскольку третье слово — «строка» (начиная с 0, запомните), а третий параметр указывает, что его следует повторить 5 раз.
//
//     Простой. Удачи.


function modifyMultiply (str,loc,num) {
//Code here
  let arr =  str.split(' ')
  let resultStr = (arr[loc] + '-').repeat(num)
    return resultStr.slice(0,resultStr.length - 1)
}

console.log(modifyMultiply('This is a string',3,5))