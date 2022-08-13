// Просто, учитывая строку слов, вернуть длину кратчайшего слова (слов).
//
//     Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.

function findShort(s){
    let arr = s.split(' ')
    return arr.reduce((acc,curr)=> {
        console.log(acc+' : '+ acc.length)
        console.log(curr+' : '+ curr.length)
       return  acc.length > curr.length?curr:acc
    }).length
}

console.log(findShort("Let's travel we abroad shall"))