// Напишите функцию, которая принимает на вход неотрицательное целое число (секунды)
// и возвращает время в удобочитаемом формате (ЧЧ:ММ:СС).

// ЧЧ = часы, дополненные двумя цифрами, диапазон: 00–99.
// ММ = минуты, дополненные двумя цифрами, диапазон: 00–59.
// SS = секунды, дополненные до 2 цифр, диапазон: 00–59.
// Максимальное время никогда не превышает 359999 (99:59:59).
// Некоторые примеры вы можете найти в тестовых приспособлениях.

function humanReadable(seconds) {
  const setZero = (number) => {
    if (number.toString().length === 1) {
      return "0" + number;
    } else {
      return number;
    }
  };

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const second = seconds - hours * 3600 - minutes * 60;
  return `${setZero(hours)}:${setZero(minutes)}:${setZero(second)}`;
}

console.log(humanReadable(369999));

// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript
