// Каждый день растение растет на upSpeedметры. Каждую ночь высота этого растения уменьшается на downSpeedметры из-за недостатка солнечного тепла.
//  Изначально растение имеет высоту 0 метров. Мы сажаем семена в начале дня. Мы хотим знать, когда высота растения достигнет определенного уровня.

// Пример
// Для upSpeed = 100, downSpeed = 10 and desiredHeight = 910, вывод должен быть 10.

function growingPlant(upSpeed, downSpeed, desiredHeight) {
  //coding and coding..
  let tempValue = 0;
  let count = 0;
  while (tempValue <= desiredHeight) {
    tempValue += upSpeed;
    count++;
    if (tempValue >= desiredHeight) {
      return count;
    } else {
      tempValue -= downSpeed;
    }
  }
}
