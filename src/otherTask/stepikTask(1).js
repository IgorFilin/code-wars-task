// Реализуйте функцию
// numPrettier(num, splitter)
//     . Эта функция должна принимать 2 аргумента:
//     num - целое число (как строкой, так и числовым значением)
// splitter - разделитель
// numPrettier должен разделять разрядность числа num, пришедшим вам splitter'ом и возвращать результат
// Например такой вызов функции
// numPrettier(5653100, "_")
// Даст следующий ответ:  5_653_100
//
// Разумеется, если вместо num вам приходит пробел или пустая строка ' ' или '', то нужно возвратить просто пустую строку - ''

const numPrettier = (num, splitter) => {
    if(num === '' || num === ' '){
        return ''
    }else {
        num = String(num)
        return num.split('').reverse().map((el,i) => ((i) % 3) === 0 ? el + splitter : el ).reverse().join('').slice(0,-1)
    }

}

console.log(numPrettier(5653100, "_"))