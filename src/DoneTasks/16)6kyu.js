// Цифровой корень — это рекурсивная сумма всех цифр числа.
// Учитывая n, возьмите сумму цифр n. Если это значение имеет более одной цифры, продолжайте уменьшать таким образом, пока не будет получено однозначное число. Вход будет неотрицательным целым числом
// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6



function digitalRoot(n) {
    if(n.toString().length === 1) return n
    var arr = n.toString().split('')
    var exit = +arr[0] + +arr[1]
    console.log(arr.length === 2);
    if (arr.length === 2 && exit.toString().length === 1) return exit
    var result = arr.reduce((a, b) => +a + +b, 0)
    return digitalRoot(result)
}

console.log(digitalRoot(456))


