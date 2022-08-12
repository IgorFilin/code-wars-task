// В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны вернуть наибольшее и наименьшее число.
// highAndLow("1 2 3 4 5");  // return "5 1"


function highAndLow(numbers) {
    // ...
    let result = []
    let arr = numbers.split(' ')
    arr = arr.map(el => Number(el))
    result.push(Math.max.apply(null, arr))
    result.push(Math.min.apply(null, arr))
    return result.join(' ')

}

console.log(highAndLow("1 2 3 4 5"))
