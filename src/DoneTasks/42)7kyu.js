// Ваша задача — составить функцию, которая возвращает сумму последовательности целых чисел.
//
//     Последовательность определяется тремя неотрицательными значениями: начало, конец, шаг (включительно).
//
//     Если начальное значение больше конечного, функция должна вернуть 0


const sequenceSum = (begin, end, step) => {
    // May the Force be with you
    if (begin > end) {
        return 0
    } else {
        let result = 0
        for (let i = begin; i <= end; i += step) {
            result += i
        }
        return  result
    }
};

console.log(sequenceSum(1, 5, 1)) // (1 + 2 + 3 + 4 + 5)