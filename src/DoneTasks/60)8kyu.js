// У меня есть кошка и собака.

// Я получил их одновременно с котенком/щенком. Это было по-человечески много лет назад.

// Теперь верните их возраст как [humanYears,catYears,dogYears]

// ПРИМЕЧАНИЯ:

// HumanYears >= 1
// HumanYears - только целые числа

function humanYearsCatYearsDogYears (humanYears) {
  let result = [0,0,0]
  if(humanYears === 1) {
    result = [1,15,15]
  }else if (humanYears === 2){
    result = [2,24,24]
  }else if (humanYears >= 3){
    let i = 2
    let dog = 24
    let cat = 24
    while(i !== humanYears) {
     cat += 4
     dog += 5
     result = [humanYears,cat,dog]
     i++
    }   
  }
  return result
}

console.log(humanYearsCatYearsDogYears(10));