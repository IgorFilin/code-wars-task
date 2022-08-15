// Завершите решение, чтобы функция разбивала верблюжий регистр, используя пробелы между словами.
//
//     Пример
// "camelCasing"  =>  "camel Casing"
// "идентификатор" => "идентификатор"
// "" => ""

// complete the function
function solution(string) {
    let result = []
    let reseltStr = ''
    let arr = string.split('')
    if(string === ''){
        return reseltStr
    }else for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== arr[i].toUpperCase()){
            result.push(arr[i])
        }else if (arr[i] === arr[i].toUpperCase()){
            result.push(' ')
            result.push(arr[i])
        }

    }
    return result.join('')
}

console.log(solution(''))