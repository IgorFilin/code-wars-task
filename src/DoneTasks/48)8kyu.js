// Имея два числа и арифметический оператор (его имя в виде строки), верните результат двух чисел, к которым был применен этот оператор.
//
//     a и b оба будут положительными целыми числами, причем a всегда будет первым числом в операции, а b всегда вторым.
//
//     Четыре оператора: «сложить», «вычесть», «делить», «умножить».
// The four operators are "add", "subtract", "divide", "multiply".

function arithmetic(a, b, operator) {
    //your code here!
    switch (operator) {
        case "add":
            return a + b
        case 'subtract': {
            return a - b
        }
        case 'divide': {
            return a / b
        }
        case 'multiply': {
            return a * b
        }
    }


}

console.log(arithmetic(2, 2, 'add'))