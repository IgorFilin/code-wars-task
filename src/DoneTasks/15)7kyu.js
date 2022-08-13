// Банкоматы позволяют использовать 4- или 6-значные PIN-коды, а PIN-коды не могут содержать ничего, кроме ровно 4 или ровно 6 цифр.
//
//     Если функции передана допустимая строка PIN-кода, верните true, иначе верните false.
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN (pin) {
    //return true or false
    let arr = pin.trim().split('')
    if(arr.length === 4 || arr.length === 6){
        for (const i in arr) {
            if(isNaN(+arr[i])) return false
        }
    }else return false
  return true
}

console.log(validatePIN('1234567'))