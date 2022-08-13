// Цифровой корень — это рекурсивная сумма всех цифр числа.
// Учитывая n, возьмите сумму цифр n. Если это значение имеет более одной цифры, продолжайте уменьшать таким образом, пока не будет получено однозначное число. Вход будет неотрицательным целым числом
// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6



function digitalRoot(n) {
    let result
    if(n.toString().split('').length > 1){
        let arr = n.toString().split('')
        console.log(arr)
        result = arr.reduce((acc,curr)=> {
            return +acc + +curr
        })
    }
    return result
}

console.log(digitalRoot(405829))


