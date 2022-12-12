// Создайте функцию с именем divisors/Divisors, которая принимает целое число n > 1 и
// возвращает массив со всеми делителями целого числа (кроме 1 и самого числа), от
// наименьшего до наибольшего. Если число простое, верните строку '(integer) is prime'
// (null в C#) (используйте String a в Haskell и Result<Vec<u32>, String> в Rust).
//
// Пример:

// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

function divisors(integer) {
    const arr = []
    for (let i = 2; i < integer; i++) {
        if(integer % i === 0){
            arr.push(i)
        }
    }
    if(arr.length === 0){
        return `${integer} is prime`
    }
    return arr
};

console.log(divisors(13))
