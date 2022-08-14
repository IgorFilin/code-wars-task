
// Вы, наверное, знаете систему «лайков» из Facebook и других страниц. Люди могут «лайкать» сообщения в блогах, изображения или другие элементы. Мы хотим создать текст, который должен отображаться рядом с таким элементом.
//
//     Реализуйте функцию, которая принимает массив, содержащий имена людей, которым понравился элемент. Он должен возвращать отображаемый текст, как показано в примерах:
//           []                          -->  "no one likes this"
//     ["Peter"]                         -->  "Peter likes this"
//     ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
//     ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
//     ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"


function likes(names) {
    // TODO
    if(names.length === 0) {
        return "no one likes this"
    }else if (names.length === 1){
        return names[0] + ' likes this'
    }else if (names.length === 2){
        return names[0] + ' and ' + names[1] + ' like this'
    }else if (names.length === 3){
        return names[0] + ', ' + names[1] + ' and ' + names[2] +' like this'
    }else if (names.length > 3 ){
        let countOthersNames = names.slice(2).length
        return names[0] + ', ' + names[1] + ' and ' + countOthersNames + ' others like this'
    }

}

console.log(likes(["Alex", "Jacob", "Mark", "Max","Max","Max","Max"]))