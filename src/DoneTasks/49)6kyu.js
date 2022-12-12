// Дан набор слов. Слова соединяются, если последняя буква одного слова и первая буква другого слова совпадают. Возвращает true, если все слова набора можно объединить в одно слово. Каждое слово может и должно использоваться только один раз. В противном случае вернуть ложь.

function solution(words) {
    const result = null
     words.reduce((el,tempEl)=> {
        if(el.slice(1 - length) === tempEl.slice(1 - length)){
            result = true
        }
    })
    return result
}

console.log(solution(['trade', 'pole', 'view', 'grave', 'ladder', 'mushroom', 'president']))


