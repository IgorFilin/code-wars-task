
// Подсчитайте количество дубликатов
// Напишите функцию, которая будет возвращать количество различных буквенных символов и цифр, не зависящих от регистра, которые встречаются во входной строке более одного раза. Можно предположить, что входная строка содержит только буквы (как прописные, так и строчные) и числовые цифры.

function duplicateCount(text){
    let count = 0
    let obj = {}
    for(let i of text){
        debugger
        i = i.toLowerCase()
        if(!obj[i]){
            obj[i] = 1
        }else {
            obj[i]++
        }
    }
    for (let i in obj) {
        debugger
     if(obj[i] > 1){
         count++
     }
    }
    return count
}

console.log(duplicateCount('Aabbcde'))