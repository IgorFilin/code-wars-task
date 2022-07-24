//Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
function remove (string) {
    //coding and coding....
   if(string.slice(-1) === '!') {
      return  string.substring(0, string.length - 1)
   } else return string
   }



console.log(remove('HiI'))