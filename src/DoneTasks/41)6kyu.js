// Вам будет предоставлен массив чисел. Вы должны отсортировать нечетные числа в порядке возрастания, оставив четные числа на их исходных позициях.
//
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
    // Return a sorted array.
    let tempArray = array.filter(el => el % 2).sort((a, b) => a - b)
    return array.map(el => el % 2 ? tempArray.shift(): el)

}

console.log(sortArray([5, 8, 6, 3, 4]))
