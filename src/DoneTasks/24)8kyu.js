// Вы получаете массив чисел, возвращаете сумму всех положительных.
//
//     Пример [1,-4,7,12] => 1 + 7 + 12 = 20
//
// Примечание: если суммировать нечего, сумма по умолчанию равна 0.


function positiveSum(arr) {
    const sum = arr.reduce((acc, curr) => {
        if (curr > 0) acc += curr
        return acc
    }, 0);
    return sum
}

console.log(positiveSum([1, -4, 7, 12]))