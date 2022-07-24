//Завершите метод/функцию, чтобы он преобразовывал слова, разделенные тире/подчеркиванием, в верблюжий регистр. Первое слово в выводе должно быть написано с заглавной буквы только в том случае, если исходное слово было написано с заглавной буквы (известный как верхний верблюжий регистр, также часто называемый регистром Паскаля).
function toCamelCase(str) {
    let arr = str.split('_')
    if(arr.length > 1){
        for(let i = 1;i < arr.length; i++){
            arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
        }
    }else {
        arr = str.split('-')
        for(let i = 1;i < arr.length; i++){
            arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
        }
    }
    return arr.join('')
}
function toCamelCase2(str){
    let arr = str.split('_')
    if (arr.length > 1) {
        for (let i = 1; i<arr.length;i++){
            arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
        }
    } else {
        arr = str.split('-')
        for (let i = 1; i<arr.length;i++){
            arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
        } }
    return arr.join('')
}
console.log(toCamelCase("the-Stealth-Warrior"))
console.log(toCamelCase("The_Stealth_Warrior"))
console.log(toCamelCase2("the-Stealth-Warrior"))

//"theStealthWarrior"

