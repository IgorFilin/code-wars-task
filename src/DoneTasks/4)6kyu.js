// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// Реализовать функцию unique_in_order, которая принимает в качестве аргумента последовательность и возвращает список элементов без каких-либо элементов с одинаковым значением рядом друг с другом и с сохранением исходного порядка элементов.


// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder = function (iterable) {
    //your code here - remember iterable can be a string or an array
    if (Array.isArray(iterable)) {
        return iterable.filter((el, i, arr) => arr[i] != el)
    } else if (typeof iterable === 'string') {
        return iterable.split('').filter((el, i, arr) => arr[i - 1] != el)
    }
}
console.log(uniqueInOrder([]))

// arr.filter((item, pos) => iterable.indexOf(item) == pos) // удаляет все повторяющиеся элементы(оставляет 1 элемент 1 раз в массиве)
// arr.filter((el, i, arr) => arr[i - 1] != el) // удаляет повторяющиеся элементы, и оставляет 1 элемент столько раз сколько он указан через строку, но в целом в массиве повторяет