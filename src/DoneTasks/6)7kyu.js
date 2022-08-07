// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Завершите функцию, которая принимает строковый параметр и переворачивает каждое слово в строке. Все пробелы в строке должны быть сохранены.
// "This is an example!" ==> "sihT si na !elpmaxe"


function reverseWords(str) {
    // Go for it
   let arr = str.split(' ')
    let copyArr = arr.map(el=> el.split('').reverse().join(''))
    return copyArr.join(' ')

}

function reverseWords2(str) {
 let newArr = []
    let arr = str.split(' ')

    for (let i = 0; i < arr.length; i++) {
          newArr.push(arr[i].split('').reverse().join(''))

    }
    return newArr.join(' ')
}
console.log(reverseWords("This is an example!"))
console.log(reverseWords2("This is an example!"))



