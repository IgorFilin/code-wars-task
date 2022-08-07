// Напишите программу, которая находит сумму всех чисел от 1 до num. Число всегда будет положительным целым числом больше 0.

// summation(2) -> 3
// 1 + 2

var summation = function (num) {
    // Code here
    let sum = 0
    for (let i = 1; i <= num; i++) {
        sum = sum + i
    }
return sum
}

console.log(summation(2))