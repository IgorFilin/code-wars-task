// Ваша задача состоит в том, чтобы создать функцию, которая может принимать любое неотрицательное целое число в качестве аргумента и возвращать его с цифрами в порядке убывания. По сути, переставьте цифры, чтобы получить максимально возможное число.

// Input: 42145 Output: 54421


function descendingOrder(n) {
    //...
    let str = String(n)
    let arr = str.split('').sort((a,b)=> b - a)
    return Number(arr.join(''))
}

console.log(descendingOrder(145263))
//Output: 654321

