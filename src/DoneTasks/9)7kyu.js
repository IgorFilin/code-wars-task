// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"


function accum(s) {
    // your code
    s = s.toLowerCase()
   let arr = s.split('')
  let newArr = arr.map((el,i) => el.repeat(i + 1))
    return  newArr.map(el => el[0].toUpperCase() + el.substring(1)).join('-')
}

console.log(accum("RqaEzty"))