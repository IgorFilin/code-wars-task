// Проверьте, содержит ли строка одинаковое количество «x» и «o». Метод должен возвращать логическое значение и не учитывать регистр. Строка может содержать любой символ.
// XO("zpzpzpp") => true //когда нет «x» и «o», должно возвращаться значение true

function XO(str) {
    //code here
    let arrX = []
    let arrY = []
    let arr = str.split('')
        arr.forEach(el => {
            if(el.toLowerCase() === 'x'){
                arrX.push(el)
            }else if (el.toLowerCase() === 'o'){
                arrY.push(el)
            }

        })

    return arrX.length === arrY.length
}

console.log(XO("zpzpzpp"))
// XO("ooxx") => true
// XO("xooxx") => false