// У продавца книг есть много книг, классифицированных в 26 категориях, обозначенных A, B, C, ..., Z. Каждая книга имеет код из не менее 3 символов. Первый символ кода — заглавная буква, которая определяет категорию книги .
// В списке книготорговца за каждым кодом следует пробел и положительное целое число, которое указывает количество книг с данным кодом на складе.
// Задача
// Вы получите список книготорговца и список категорий. Ваша задача — найти общее количество книг в списке книготорговца, используя коды категорий в списке категорий. Примечание: коды в обоих списках идут в том же порядке.
// Верните результат в виде строки, описанной в примере ниже, или в виде списка пар (Haskell/Clojure/Racket/Prolog).
// Если какой-либо из входных списков пуст, вернуть пустую строку или пустой массив/список (Clojure/Racket/Prolog).

// Пример
// # the bookseller's stocklist:
// "ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"

// # list of categories: 
// "A", "B", "C", "W"

// # result:
// "(A : 20) - (B : 114) - (C : 50) - (W : 0)"
// Объяснение:

// категория A: 20 книг ( ABART)
// категория B: 114 книг = 25 ( BKWRK) + 89 ( BTSQZ)
// категория C: 50 книг ( CDXEF)
// категория W: 0 книг

// ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"], ["A", "B", "C", "D"]


function stockList(books, categories) {
 
  // #data
  const counterBooks = categories.reduce((acc, curr) => {
    acc[curr] = 0
    return acc
  }, {});

  if(!books.length) return transformObjInStringResult(counterBooks)
  
    // #logic
  
  books.forEach((book) => {
    const count = book.split(' ')[1]
    categories.forEach((category) => {
       if(book.indexOf(category) === 0) {
         counterBooks[category] += Number(count)
       }
    })
  })

  // #function

  function transformObjInStringResult(obj) {
   return Object.entries(obj).reduce((acc, [category, count], index, arr) => {
      acc += `(${category} : ${count}) ${index !== (arr.length - 1) ? '- ' : ' '}`
      return acc
     },'')
  }

  // #result
  
  return transformObjInStringResult(counterBooks)
}

// console.log(stockList(["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"], ["A", "B", "C", "W"]));
// console.log(stockList(["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"], ["A", "B", "C", "D"]));
console.log(stockList(["BBAR 150","CDXE 515","BKWR 250","BTSQ 890","DRTY 600"], ["A","B","C","D"]));
// '(A : 0) - (B : 1290) - (C : 515) - (D : 600) '