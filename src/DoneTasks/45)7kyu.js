// Завершите решение, чтобы оно отсортировало переданный массив чисел. Если функция передает пустой массив или значение
// null/nil, она должна вернуть пустой массив.
//
// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

function solution(nums){
 if(!nums){
     return []
 }else {
     return nums.sort((a,b)=> a - b)
 }
}

console.log(solution([4,5,78,9,21,213,56,7,8]))

