// В этом Ката мы передаем число (n) в функцию.
//
//     Ваш код определит, является ли переданное число четным (или нет).
//
// Функция должна возвращать либо истину, либо ложь.
//
//     Числа могут быть положительными или отрицательными, целыми числами или числами с плавающей запятой.
//
//     Поплавки с десятичной частью, отличной от нуля, считаются НЕчетными для этой ката.

function testEven(n) {
    //Your awesome code here!
    if(n % 2 === 0) return true
    if(n % 2 !== 0) return false

}

console.log(testEven(0.12))