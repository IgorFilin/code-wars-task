// const paramsFilters = {
//   1: {
//     '09.01': [
//       {
//         type: 'Статистическая',
//         organization: 'Росстат',
//         taxation: ['ОСНО', 'УСН'],
//         report:
//           'Сведения о вводе в эксплуатацию зданий и сооружений (форма № С-1) за декабрь 2023 года',
//       },
//     ],
//     22.01: [
//       {
//         type: 'Бухгалтерия, налоги',
//         organization: 'ФНС',
//         taxation: ['ОСНО'],
//         report:
//           'Журнал учета полученных и выставленных счетов-фактур за 4-Й квартал 2023 года',
//       },
//       {
//         type: 'Бухгалтерия, налоги',
//         organization: 'ФНС',
//         taxation: ['Все'],
//         report: 'Единая упрощенная декларация за 2023 год',
//       },
//       {
//         type: 'Бухгалтерия, налоги',
//         organization: 'ФНС',
//         taxation: ['ОСНО', 'УСН'],
//         report: 'Декларация по налогу на игорный бизнес за декабрь 2023 года',
//       },
//       {
//         type: 'Бухгалтерия, налоги',
//         organization: 'ФНС',
//         taxation: ['ОСНО', 'УСН'],
//         report:
//           'Декларация по косвенным налогам (налогу на добавленную стоимость и акцизам) при импорте товаров из стран ЕАЭС за декабрь 2023 года',
//       },
//       {
//         type: 'Бухгалтерия, налоги',
//         organization: 'ФНС',
//         taxation: ['ОСНО', 'УСН', 'ЕСХН'],
//         report: 'Декларация по НДС за 4-й квартал 2023 года',
//       },
//     ],
//     25.01: [
//       {
//         type: 'Бухгалтерия, налоги',
//         organization: 'ФНС',
//         taxation: ['ОСНО', 'УСН', 'ЕСХН'],
//         report: 'Декларация по НДС за 4-й квартал 2023 года',
//       },
//       {
//         type: 'Бухгалтерия, налоги',
//         organization: 'ФНС',
//         taxation: ['Все'],
//         report: 'Декларация по водному налогу за 4-й квартал 2023 года',
//       },
//       {
//         type: 'Бухгалтерия, налоги',
//         organization: 'ФНС',
//         taxation: ['Все'],
//         report: 'Декларация по акцизам на нефтяное сырье за декабрь 2023 года',
//       },
//       {
//         type: 'Бухгалтерия, налоги',
//         organization: 'ФНС',
//         taxation: ['Все'],
//         report: 'Декларация по налогу на сверхприбыль',
//       },
//       {
//         type: 'Бухгалтерия, налоги',
//         organization: 'ФНС',
//         taxation: ['Все'],
//         report:
//           'Уведомление об исчисленных суммах налогов, авансовых платежей, страховых взносов, сборов',
//       },
//       {
//         type: 'Бухгалтерия, налоги',
//         organization: 'ФНС',
//         taxation: ['Все'],
//         report:
//           'Уведомлений об исчисленных суммах НДФЛ (за период с 1 по 22 января)',
//       },
//       {
//         type: 'Бухгалтерия, налоги',
//         organization: 'ФНС',
//         taxation: ['Все'],
//         report:
//           'Персонифицированные сведения о физических лицах за декабрь 2023 года',
//       },
//     ],
//     29.01: [
//       {
//         type: 'Бухгалтерия, налоги',
//         organization: 'ФНС',
//         taxation: ['ОСНО', 'УСН'],
//         report:
//           'Извещение об уплате авансового платежа акциза по алкогольной и (или) спиртосодержащей продукции за январь 2024 года',
//       },
//     ],
//   },
//   2: {
//     '05.02': [
//       {
//         type: 'Бухгалтерия, налоги',
//         organization: 'ФНС',
//         taxation: ['Все'],
//         report:
//           'Уведомлений об исчисленных суммах НДФЛ (за период с 23 по 31 января)',
//       },
//     ],
//     20.02: [
//       {
//         type: 'Бухгалтерия, налоги',
//         organization: 'ФНС',
//         taxation: ['ОСНО', 'УСН'],
//         report:
//           'Декларация по косвенным налогам (налогу на добавленную стоимость и акцизам) при импорте товаров из стран ЕАЭС за январь 2024 года',
//       },
//       {
//         type: 'Бухгалтерия, налоги',
//         organization: 'ФНС',
//         taxation: ['ОСНО', 'УСН'],
//         report: 'Декларация по налогу на игорный бизнес за январь 2024 года',
//       },
//     ],
//     26.02: [
//       {
//         type: 'Бухгалтерия, налоги',
//         organization: 'ФНС',
//         taxation: ['Все'],
//         report:
//           'Уведомлений об исчисленных суммах НДФЛ (за период с 1 по 22 февраля)',
//       },
//       {
//         type: 'Бухгалтерия, налоги',
//         organization: 'ФНС',
//         taxation: ['Все'],
//         report:
//           'Уведомление об исчисленных суммах налогов, авансовых платежей, страховых взносов, сборов',
//       },
//       {
//         type: 'Бухгалтерия, налоги',
//         organization: 'ФНС',
//         taxation: ['Все'],
//         report: 'Декларация по НДПИ за январь 2024 года',
//       },
//       {
//         type: 'Бухгалтерия, налоги',
//         organization: 'ФНС',
//         taxation: ['Все'],
//         report: 'Форма 6-НДФЛ за 2023 год',
//       },
//       {
//         type: 'Бухгалтерия, налоги',
//         organization: 'ФНС',
//         taxation: ['ОСНО'],
//         report:
//           'Декларация налога на прибыль за январь 2024 года (для организаций, которые рассчитывают налог ежемесячно по фактической прибыли)',
//       },
//       {
//         type: 'Бухгалтерия, налоги',
//         organization: 'ФНС',
//         taxation: ['Все'],
//         report: 'Декларация по акцизам на нефтяное сырье за январь 2024 года',
//       },
//       {
//         type: 'Бухгалтерия, налоги',
//         organization: 'ФНС',
//         taxation: ['Все'],
//         report:
//           'Уведомление об исчисленных суммах налогов, авансовых платежей, страховых взносов, сборов',
//       },
//       {
//         type: 'Бухгалтерия, налоги',
//         organization: 'ФНС',
//         taxation: ['ОСНО', 'УСН'],
//         report: 'Декларация по налогу на имущество за 2023 год',
//       },
//     ],
//     27.02: [
//       {
//         type: 'Бухгалтерия, налоги',
//         organization: 'ФНС',
//         taxation: ['Все'],
//         report:
//           'Персонифицированные сведения о физических лицах январь 2024 года',
//       },
//     ],
//     28.02: [
//       {
//         type: 'Бухгалтерия, налоги',
//         organization: 'ФНС',
//         taxation: ['ОСНО, УСН'],
//         report:
//           'Извещение об уплате авансового платежа акциза по алкогольной и (или) спиртосодержащей продукции за февраль 2024 года',
//       },
//     ],
//   },
//   3: {
//     '04.03': [
//       {
//         type: 'Бухгалтерия, налоги',
//         organization: 'ФНС',
//         taxation: ['Все'],
//         report:
//           'Уведомлений об исчисленных суммах НДФЛ (за период с 23 по 29 февраля)',
//       },
//     ],
//     20.03: [
//       {
//         type: 'Бухгалтерия, налоги',
//         organization: 'ФНС',
//         taxation: ['ОСНО', 'УСН'],
//         report:
//           'Декларация по косвенным налогам (налогу на добавленную стоимость и акцизам) при импорте товаров из стран ЕАЭС за февраль 2023 года',
//       },
//       {
//         type: 'Бухгалтерия, налоги',
//         organization: 'ФНС',
//         taxation: ['ОСНО', 'УСН'],
//         report: 'Декларация по налогу на игорный бизнес за февраль 2024 года',
//       },
//     ],
//     25.03: [
//       {
//         type: 'Бухгалтерия, налоги',
//         organization: 'ФНС',
//         taxation: ['Все'],
//         report:
//           'Уведомлений об исчисленных суммах НДФЛ (за период с 1 по 22 марта)',
//       },
//       {
//         type: 'Бухгалтерия, налоги',
//         organization: 'ФНС',
//         taxation: ['Все'],
//         report:
//           'Уведомление об исчисленных суммах налогов, авансовых платежей, страховых взносов, сборов',
//       },
//       {
//         type: 'Бухгалтерия, налоги',
//         organization: 'ФНС',
//         taxation: ['Все'],
//         report: 'Декларация по НДПИ за февраль 2024 года',
//       },
//       {
//         type: 'Бухгалтерия, налоги',
//         organization: 'ФНС',
//         taxation: ['Все'],
//         report:
//           'Налоговая декларация по налогу на дополнительный доход от добычи углеводородного сырья (НДД) за 2023 год',
//       },
//       {
//         type: 'Бухгалтерия, налоги',
//         organization: 'ФНС',
//         taxation: ['ОСНО'],
//         report:
//           'Декларация или налоговый расчет по налогу на прибыль за 2023 год',
//       },
//       {
//         type: 'Бухгалтерия, налоги',
//         organization: 'ФНС',
//         taxation: ['ОСНО'],
//         report:
//           'Декларация налога на прибыль за февраль 2024 года (для организаций, которые рассчитывают налог ежемесячно по фактической прибыли)',
//       },
//       {
//         type: 'Бухгалтерия, налоги',
//         organization: 'ФНС',
//         taxation: ['Все'],
//         report: 'Декларация по акцизам на нефтяное сырье за февраль 2024 года',
//       },
//       {
//         type: 'Бухгалтерия, налоги',
//         organization: 'ФНС',
//         taxation: ['Все'],
//         report:
//           'Уведомление об исчисленных суммах налогов, авансовых платежей, страховых взносов, сборов',
//       },
//       {
//         type: 'Бухгалтерия, налоги',
//         organization: 'ФНС',
//         taxation: ['Все'],
//         report:
//           'Персонифицированные сведения о физических лицах за февраль 2024 года',
//       },
//       {
//         type: 'Бухгалтерия, налоги',
//         organization: 'ФНС',
//         taxation: ['УСН'],
//         report: 'Декларация по УСН (для организаций) за 2023 год',
//       },
//       {
//         type: 'Бухгалтерия, налоги',
//         organization: 'ФНС',
//         taxation: ['ЕСХН'],
//         report: 'Декларация по ЕСХН (для организаций и ИП) за 2023 год',
//       },
//     ],
//     28.03: [
//       {
//         type: 'Бухгалтерия, налоги',
//         organization: 'ФНС',
//         taxation: ['ОСНО', 'УСН'],
//         report:
//           'Извещение об уплате авансового платежа акциза по алкогольной и (или) спиртосодержащей продукции за февраль 2024 года',
//       },
//     ],
//     29.03: [
//       {
//         type: 'Бухгалтерия, налоги',
//         organization: 'ФНС',
//         taxation: ['Все'],
//         report: 'Годовая бухгалтерская (финансовая) отчетность',
//       },
//     ],
//   },
//   5: {
//     '02.05': [
//       {
//         type: 'Бухгалтерия, налоги',
//         organization: 'ФНС',
//         taxation: ['Все'],
//         report:
//           'Уведомлений об исчисленных суммах НДФЛ (за период с 23 по 31 января)',
//       },
//     ],
//   },
//   8: {
//     '05.08': [
//       {
//         type: 'Бухгалтерия, налоги',
//         organization: 'ФНС',
//         taxation: ['Все'],
//         report: 'Уведомлений об',
//       },
//     ],
//   },
// };

// function filteredParams(value, type) {
//   const filteredData = {};
//   Object.keys(paramsFilters).forEach((key) => {
//     filteredData[key] = {};
//     Object.keys(paramsFilters[key]).forEach((subKey) => {
//       const filteredValues = paramsFilters[key][subKey].filter(
//         (el) => el.type === type && el.taxation.includes(value),
//       );
//       if (filteredValues.length > 0) {
//         filteredData[key][subKey] = filteredValues;
//       }
//     });
//   });
//   return filteredData;
// }

// console.log(filteredParams('УСН', 'Бухгалтерия, налоги'));

const foo = {
  user: {
    id: 1,
    nicknames: ["boy2007", "zalupaster228", "devilZalupa"],
    address: {
      country: "Ukraine",
      sites: ["Lviv", "AzovStyal"],
    },
  },
};

const arrayFoo = ["1", "2", "3"];

// Методы копирования обьекта/массива
// const obj2 = { ...foo, user: { ...foo.user, nicknames: [...foo.user.nicknames] } };
// const obj2 = { ...foo, user: ["1"] };
// const obj2 = JSON.parse(JSON.stringify(foo));
// это только к обьектам
// const obj2 = Object.assign(foo, {});
// const arrayFoo2 = arrayFoo.slice();
// const arrayFoo2 = arrayFoo.map((el) => el);

// console.log(obj2);
// console.log(arrayFoo2 === arrayFoo);
