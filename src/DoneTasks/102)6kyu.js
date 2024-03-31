// Вам будет предоставлена ​​последовательность объектов (ассоциативные массивы в PHP),
// представляющих данные о разработчиках, которые зарегистрировались для участия в следующей конференции по программированию, которую вы организуете.

// Ваша задача вернуть:

// true если все следующие континенты/географические зоны будут представлены хотя бы одним разработчиком:
//  «Африка», «Америка», «Азия», «Европа», «Океания».
// false в противном случае.

function allContinents(list) {
  // thank you for checking out the Coding Meetup kata :)

  let acceptZone = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  list.forEach((el) => {
    if (acceptZone.includes(el.continent)) {
      acceptZone = acceptZone.filter((zone) => zone !== el.continent);
      return true;
    } else return false;
  });
  return !acceptZone.length;
}

console.log(
  allContinents([
    {
      firstName: "Fatima",
      lastName: "A.",
      country: "Algeria",
      continent: "Africa",
      age: 25,
      language: "JavaScript",
    },
    {
      firstName: "Agustín",
      lastName: "M.",
      country: "Chile",
      continent: "Americas",
      age: 37,
      language: "C",
    },
    {
      firstName: "Jing",
      lastName: "X.",
      country: "China",
      continent: "Asia",
      age: 39,
      language: "Ruby",
    },
    {
      firstName: "Laia",
      lastName: "P.",
      country: "Andorra",
      continent: "Europe",
      age: 55,
      language: "Ruby",
    },
    {
      firstName: "Oliver",
      lastName: "Q.",
      country: "Australia",
      continent: "Oceania",
      age: 65,
      language: "PHP",
    },
  ])
);
