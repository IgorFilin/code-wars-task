// В супермаркете очередь к кассам самообслуживания.
//  Ваша задача — написать функцию для расчета общего времени, необходимого всем покупателям для оформления заказа!
// вход
// клиенты: массив положительных целых чисел, представляющих очередь. Каждое целое число представляет покупателя,
// а его значение — количество времени, которое ему требуется для оформления заказа.
// n: положительное целое число, количество касс.
// выход
// Функция должна возвращать целое число — общее требуемое время.

function queueTime(customers, n) {
  if (customers.length) {
    const timeSaleAllPeople = customers.reduce((acc, curr) => {
      return (acc += curr);
    });
    return timeSaleAllPeople / n;
  } else return 0;
}

console.log(queueTime([2, 2, 3, 3, 4, 4], 2));
