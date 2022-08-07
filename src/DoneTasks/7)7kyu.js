// Джейден Смит, сын Уилла Смита, является звездой таких фильмов, как «Каратэ-пацан» (2010) и «После Земли» (2013). Джейден также известен своей философией, которую он распространяет через Twitter. Когда он пишет в Твиттере, он известен тем, что почти всегда пишет каждое слово с большой буквы. Для простоты вам придется писать каждое слово с большой буквы,
//     посмотрите, какими должны быть сокращения в приведенном ниже примере.
//
//     Ваша задача состоит в том, чтобы преобразовать строки в то, как они были бы написаны Джейденом Смитом. Строки являются настоящими цитатами Джейдена Смита, но они не написаны с заглавной буквы так, как он их изначально напечатал.

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

const toJadenCase = (str) => {
   let arr = str.split(' ')
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        arr2.push(arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase())
    }
   return arr2.join(' ')
};



const toJadenCase2 = (str) => {
  return str.split(' ').map(el=> el[0].toUpperCase() + el.slice(1).toLowerCase()).join(' ')
};
console.log(toJadenCase("How can mirrors be real if our eyes aren't real"))
console.log(toJadenCase2("How can mirrors be real if our eyes aren't real"))