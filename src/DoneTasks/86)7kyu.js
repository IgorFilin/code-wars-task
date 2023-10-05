// Между двумя синими бисеринами помещаем две красные бисеринки.
//  Имеется N синих бусин. Посмотрев на расположение ниже, подсчитайте количество красных бусинок.

// @ @@ @ @@ @ @@ @ @@ @ @@ @

// Реализовать count_red_beads(n)(в PHP count_red_beads($n);
//  в Java, Javascript, TypeScript, C, C++ countRedBeads(n)) так,
//   чтобы он возвращал количество красных бусинок.
// Если синих бусин меньше двух, верните 0.

function countRedBeads(n) {
  return n * 2 - 2;
}

console.log(countRedBeads(5));

// https://www.codewars.com/kata/58712dfa5c538b6fc7000569/train/javascript
