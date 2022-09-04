// Учитывая строку, вы должны вернуть строку, в которой каждый символ (с учетом регистра) повторяется один раз.
//
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

function doubleChar(str) {
    // Your code here
    let arr = str.split('')
    let result = arr.map(el => el.repeat(2)).join('')
    return result
}

console.log(doubleChar("Hello World"))