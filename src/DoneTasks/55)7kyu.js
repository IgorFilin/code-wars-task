// Учитывая список стен, приближающихся к вам, сможете ли вы преодолеть эти стены, не получив удара?


function canEscape(walls) {
    let arr = []
    walls.forEach((el) => {

        if ((el[0] + el[1]) % 2 === 0 && (el[0] !== 0 && el[1] !== 0) && (el[0] !== 1 && el[1] !== 1)) {
            arr.push(1)
        }
    }, false)
    if (walls.length === arr.length) {
        return true
    } else return false
}

console.log(canEscape([[7, 7], [7, 7], [0, 0], [7, 7]]))