

// Завершить функцию, которая принимает два целых числа (a, b, где a < b), и вернуть массив всех целых чисел между входными параметрами, включая их.
//
//     Например:

function between(a, b) {
    // your code here
    let arr = []
    for (let i = a; i <= b; i++) {
        arr.push(i)
    }
    return arr
}

console.log(between(1,5))
