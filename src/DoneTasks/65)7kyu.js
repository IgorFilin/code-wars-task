// Учитывая число в качестве параметра (от 2 до 30),
//  вернуть массив, содержащий строки, которые образуют поле.

function box(number) {
  if (number >= 2 && number <= 30) {
    let resultArray = [];
    for (let i = 1; i <= number; i++) {
      if (i === 1) {
        let str = "";
        for (let j = 0; j < number; j++) {
          str += "-";
        }
        resultArray.push(str);
      }
      if (i === number) {
        let str = "";
        for (let j = 0; j < number; j++) {
          str += "-";
        }
        resultArray.push(str);
      }
      if (i !== 1 && i !== number) {
        let str = "";
        for (let j = 1; j <= number; j++) {
          if (j === 1) {
            str += "-";
          } else if (j === number) {
            str += "-";
          } else {
            str += " ";
          }
        }
        resultArray.push(str);
      }
    }
    return resultArray;
  } else return "Oops";
}

console.log(box(3));
