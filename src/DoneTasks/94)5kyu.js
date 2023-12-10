// Ваша задача — написать функцию, которая увеличивает строку для создания новой строки.

// Если строка уже заканчивается числом, это число следует увеличить на 1.
// Если строка не заканчивается числом. к новой строке следует добавить число 1.
// Примеры:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Внимание: если в числе есть ведущие нули, следует учитывать количество цифр.

function incrementString(strng) {
  if (isNaN(strng[strng.length - 1])) {
    return strng + 1;
  } else {
    let count = "";
    let firstCountNumber;
    let lengthCountNumber;
    let isString = false;

    for (let i = strng.length - 1; i >= 0; i--) {
      if (!isNaN(strng[i]) && strng[i] != 0) {
        count += strng[i];
      } else {
        isString = true;
        if (!firstCountNumber) {
          firstCountNumber = i + 1;
        }

        break;
      }
    }
    lengthCountNumber = strng.length - firstCountNumber;

    if (!count) {
      count = 0;
    }

    count = parseInt(count) + 1;
    if (!isString) {
      return count.toString();
    }

    if (strng[strng.length - count.toString().length - 1] == 0) {
      return strng.slice(0, strng.length - count.toString().length) + count;
    } else {
      return strng.slice(0, firstCountNumber) + count;
    }
  }
}

console.log(typeof incrementString("1"));
