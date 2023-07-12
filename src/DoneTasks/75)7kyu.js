// Идет война и никто не знает - война алфавитов!
// Есть две группы враждебных писем.
// Напряжение между левыми и правыми буквами было слишком велико, и началась война.

// Задача
// Напишите функцию, которая принимает fightстроку, состоящую только из строчных букв, и возвращает, кто победил в битве.
//  Когда побеждает левая сторона, возвращаются Left side wins!, когда выигрывает правая сторона,
//   возвращаются Right side wins!, в остальных случаях возвращаются Let's fight again!.

// Левые боковые буквы и их сила:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// Правые боковые буквы и их сила:

//  m - 4
//  q - 3
//  d - 2
//  z - 1
// Остальные письма не имеют силы и являются только жертвами.

function alphabetWar(fight) {
  let leftPower = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
    power: 0,
  };

  let rightPower = {
    m: 4,
    q: 3,
    d: 2,
    z: 1,
    power: 0,
  };

  let arr = fight.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in leftPower) {
      leftPower.power += leftPower[arr[i]];
    }
    if (arr[i] in rightPower) {
      rightPower.power += rightPower[arr[i]];
    }
  }

  if (leftPower.power > rightPower.power) {
    return "Left side wins!";
  } else if (leftPower.power < rightPower.power) {
    return "Right side wins!";
  } else return "Let's fight again!";
}

console.log(alphabetWar("zzzzs"));
