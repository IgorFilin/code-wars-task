// У нас есть массив объектов, представляющих разных людей в наших списках контактов.
//
//     Для вас была заранее написана функция lookUpProfile, которая принимает имя и свойство (prop) в качестве аргументов.
//
//     Функция должна проверять, является ли name фактическим именем первого контакта, а данное свойство (реквизит) является свойством этого контакта.
//
//     Если оба верны,
//     затем верните «значение» этого свойства.
//
//     Если имя не соответствует ни одному контакту, то вернуть строку Нет такого контакта.
//
//     Если свойство не соответствует каким-либо действительным свойствам контакта, найденному для совпадения с именем, верните строку Нет такого свойства.

// lookUpProfile("Kristian", "lastName") should return the string Vos
// Waiting:lookUpProfile("Sherlock", "likes") should return ["Intriguing Cases", "Violin"]
// Waiting:lookUpProfile("Harry", "likes") should return an array

const contacts = [
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
  let desiredObj = contacts.find(obj => obj.firstName === name)
  if(!desiredObj) return 'No such contact'
    let desireProp = Object.keys(desiredObj).find(propValue => propValue === prop)
    if(!desireProp)return 'No such property'
    if(desiredObj) return desiredObj[prop]
}

console.log(lookUpProfile("Sherlock", "lastName"))