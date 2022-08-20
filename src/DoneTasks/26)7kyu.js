
// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
//
// Note: anagrams are case insensitive
//
// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
//
//     Examples
// "foefet" is an anagram of "toffee"
//
// "Buckethead" is an anagram of "DeathCubeK"

// write the function isAnagram
var isAnagram = function(test, original) {
    const arr1  = test.toLowerCase().split('')
    const arr2 = original.toLowerCase().split('')
    if(arr1.length === arr2.length){
        return arr1.every((el)  => arr2.includes(el))
    }else return false

};


console.log(isAnagram("apple","pale"))

