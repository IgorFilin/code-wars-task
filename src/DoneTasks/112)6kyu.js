// Построить башню
// Постройте башню в форме пирамиды как массив/список строк,
// учитывая положительное целое число этажей. Многоквартирный дом обозначается символом «*».

// Например, башня в 3 этажа выглядит так:

// [
//   "*",
//   «***»,
//   "*****"
// ]
// А башня в 6 этажей выглядит так:

// [
//   "*",
//   «***»,
// «******»,
//   «******»,
//   «*********»,
//   "***********"
// ]
// Брось вызов Build Tower Advanced, как только закончишь это :)

function towerBuilder(nFloors) {
  // build here
  const towerElem = "*";
  let resultTower = [];
  const totalNumber = nFloors + nFloors - 1;
  let pushedValue = "";
  let range = 1;
  let space = " ";

  for (let i = 0; i < totalNumber; i++) {
    pushedValue += towerElem;
  }
  resultTower.push(pushedValue);

  for (let i = 1; i < nFloors; i++) {
    let startValue = range;
    let endValue = totalNumber - range;
    let newPushedValue = pushedValue.slice(startValue, endValue);
    range += 1;
    if (newPushedValue.length !== totalNumber) {
      newPushedValue = `${space}${newPushedValue}${space}`;
    }
    resultTower.push(newPushedValue);
    space += " ";
  }

  return resultTower.reverse();
}

console.log(towerBuilder(6));
