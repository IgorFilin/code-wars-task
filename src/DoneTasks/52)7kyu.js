
// В цепочках ДНК символы «А» и «Т» дополняют друг друга,
// как «С» и «G». Ваша функция получает одну сторону ДНК (строка, кроме Haskell);
// вам нужно вернуть другую дополнительную сторону.
// Нить ДНК никогда не бывает пустой или ДНК вообще не существует (опять же, кроме Haskell).

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function DNAStrand(dna){
    const arr = dna.split('')
    return arr.map(el => {
        if(el === 'A'){
            return 'T'
        }else if (el === 'T'){
            return  'A'
        }else if (el === "G"){
            return  "C"
        }else if (el === 'C'){
            return 'G'
        }
    })
        .join('')
}

console.log(DNAStrand('ATTGC'))