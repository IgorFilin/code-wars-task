

// Напишите функцию, которая определяет, похожи ли переданные массивы. Подобные означают, что они содержат одни и те же элементы и одинаковое количество вхождений элементов.

const arr1 = [1, 2, 2, 3, 4],
    arr2 = [2, 1, 2, 4, 3],
    arr3 = [1, 2, 3, 4],
    arr4 = [1, 2, 3, "4"]
//
// arraysSimilar(arr1, arr2); // Should equal true
// arraysSimilar(arr2, arr3); // Should equal false
// arraysSimilar(arr3, arr4); // Should equal false

function arraysSimilar(arr1, arr2) {
    // TODO: Implement your arraysSimilar
    if(arr1.length !== arr2.length){
        return false
    }else {
        arr1.sort()
        arr2.sort()
        for (let i = 0; i < arr1.length; i++) {
            for (let j = 0; j < arr2.length; j++) {
                return arr1[i] === arr2[j]
            }
        }

    }

}

console.log(arraysSimilar([1, 2, 2, 3],[3, 3, 2, 1]))