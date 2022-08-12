// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

function findUniq(arr) {
return Math.max(...arr)
}

console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))