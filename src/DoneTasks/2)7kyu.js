//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
function filter_list(l) {
    // Return a new array with the strings filtered out
    let newArr = l.filter((el,i) => el >= 0  && typeof el !== 'string')

     return newArr

}

console.log(filter_list([1,"a","b",0,15]))