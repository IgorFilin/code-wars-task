// Каждый день растение растет на upSpeedметры. Каждую ночь высота этого растения уменьшается на downSpeedметры из-за недостатка солнечного тепла.
// Изначально растение имеет высоту 0 метров. Мы сажаем семена в начале дня. Мы хотим знать, когда высота растения достигнет определенного уровня.

// Пример
// Для upSpeed = 100, downSpeed = 10 and desiredHeight = 910, вывод должен быть 10.

// Test.assertEquals(growingPlant(100,10,910),10)

// Test.assertEquals(growingPlant(10,9,4),1)

function growingPlant(upSpeed, downSpeed, desiredHeight) {
  //coding and coding..
  let temp = 0;
  let count = 0;
  while (temp <= desiredHeight) {
    temp = temp + upSpeed;
    count++;
    if (temp >= desiredHeight) {
      return count;
    } else {
      temp = temp - downSpeed;
    }
  }
}

console.log(growingPlant(100, 10, 910));
