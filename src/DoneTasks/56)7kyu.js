
// У меня есть четыре положительных целых числа, A, B, C и D, где A < B < C < D. Входные данные представляют собой список целых чисел A, B, C, D, AxB, BxC, CxD, DxA в некотором порядке. Ваша задача — вернуть значение D.

// assert.strictEqual( alphabet([60,1320,4,1,88,4,15,88]), 88 );


function alphabet(ns) {
   let arr = []
    let newNs = ns.sort((a,b) => a - b)
    for (let i = 0; i < newNs.length; i++) {
        for (let j = 0; j < newNs.length; j++) {
            if (newNs[i] !== newNs[j] && newNs.some((el) => newNs[i] * newNs[j] === el)) {
                arr.push(newNs[i])
            }
        }
    }
    const set = new Set(arr)
    let result = Array.from(set)
    return result[3]
}
// [2,3,5,6,7,14,15,35]

console.log(alphabet([60,1320,4,1,88,4,15,88]))

