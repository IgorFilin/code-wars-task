// Вам будет предоставлена ​​последовательность объектов,
// представляющих данные о разработчиках, которые зарегистрировались для участия
//  в следующей конференции по программированию, которую вы организуете.

// Ваша задача — вернуть последовательность, включающую самого старшего разработчика.
//  В случае ничьей укажите все то же самое:
// возраст старших разработчиков указан в том же порядке, в котором они указаны
//  в исходном входном массиве.

// Например, учитывая следующий входной массив:

// вар список1 = [
//   { firstName: «Габриэль», LastName: «X.», страна: «Монако», континент: «Европа», возраст: 49, язык: «PHP» },
//   { firstName: 'Одвал', LastName: 'Ф.', страна: 'Монголия', континент: 'Азия',
// возраст: 38, язык: «Python» },
//   { firstName: 'Emilia', LastName: 'S.', страна: 'Литва', континент: 'Европа', возраст: 19, язык: 'Python' },
//   { firstName: 'Sou', LastName: 'B.', страна: 'Япония', континент: 'Азия', возраст: 49 лет, язык: 'PHP' },
// ];
// ваша функция должна возвращать следующий массив:

// [
//   { firstName: 'Габриэль', LastName: 'X.',
// страна: «Монако», континент: «Европа», возраст: 49, язык: «PHP» },
//   { firstName: 'Sou', LastName: 'B.', страна: 'Япония', континент: 'Азия', возраст: 49 лет, язык: 'PHP' },
// ]
// Примечания:

// Входной массив всегда будет действительным и отформатированным, как в примере выше, и никогда не будет пустым.

function findSenior(list) {
  if (list.length === 1) return;

  list.sort((a, b) => b.age - a.age);

  let oldMen = list[0];
  let resultArray = [oldMen];

  for (let index = 1; index < list.length; index++) {
    if (oldMen.age === list[index].age) {
      resultArray.push(list[index]);
    } else return resultArray;
  }
}

console.log(
  findSenior([
    { firstName: "Gabriel", lastName: "X.", country: "Monaco", continent: "Europe", age: 49, language: "PHP" },
    { firstName: "Odval", lastName: "F.", country: "Mongolia", continent: "Asia", age: 38, language: "Python" },
    { firstName: "Emilija", lastName: "S.", country: "Lithuania", continent: "Europe", age: 19, language: "Python" },
    { firstName: "Sou", lastName: "B.", country: "Japan", continent: "Asia", age: 49, language: "PHP" },
  ])
);
