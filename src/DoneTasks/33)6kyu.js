

// Напишите функцию, которая определяет, похожи ли переданные массивы. Подобные означают, что они содержат одни и те же элементы и одинаковое количество вхождений элементов.


//
// arraysSimilar(arr1, arr2); // Should equal true
// arraysSimilar(arr2, arr3); // Should equal false
// arraysSimilar(arr3, arr4); // Should equal false

function arraysSimilar(arr1, arr2) {
    // TODO: Implement your arraysSimilar
    let result = true
    if(arr1.length !== arr2.length){
        return false
    }else {
        arr1.sort()
        arr2.sort()
        for (let i = 0; i < arr1.length; i++) {
            for (let j = 0; j < arr2.length; j++) {
               if(arr1[i] !== arr2[j]){
                   return result = false
               }else  result = true
            }
        }

    }
return result
}
const arr1 = [1, 2, 2, 3, 4],
    arr2 = [2, 1, 2, 4, 3]
console.log(arraysSimilar(arr1,arr2))

function arraysSimilar2(arr1, arr2) {
    arr1.sort()
    arr2.sort()
    return arr1.length>arr2.length?arr1.every((el,i)=>el===arr2[i]):arr2.every((el,i)=>el===arr1[i])
}

console.log(arraysSimilar2(arr1,arr2))


obj.extendedLikesInfo.newestLikes.map(el=> {
    delete el._id
})