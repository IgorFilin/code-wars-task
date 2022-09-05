

// Создайте функцию с именем randomRange, которая принимает диапазон myMin и myMax и возвращает случайное целое число, которое больше или равно myMin и меньше или равно myMax включительно.

function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
    // Only change code above this line
}

console.log(randomRange(5,10))

