// Разгневанный волшебник околдовал вашего друга. Ваш будде теперь может говорить только тарабарщиной.
// Однако, выследив волшебника, вы нашли его свиток с переводом ниже.

// Есть четыре условия :
// Нельзя повторять одну и ту же клавишу подряд, если их несколько (порядок клавиш в свитке важен!).
// Бывший:to_leet('aaaa') # => '4@4@'
// Ввод будет состоять только из строчных букв алфавита (az) и одиночных пробелов.
// Бывший:to_leet('a a a a a a a') # => '4 @ 4 @ 4 @ 4'
// Если для персонажа не существует ключа, сохраните символ как есть
// ( 'm' — один из таких символов без ключа )
// Бывший:to_leet('mama') # => 'm4m@'
// Строки должны представлять ключи на прокрутке, а это означает,
// что некоторые символы, возможно, придется экранировать.

function toLeet(str) {
  const patternSymbols = {
    a: ["4", "@"],
    b: ["|3", "8"],
    d: ["|)", "o|"],
    e: ["3"],
    f: ["|="],
    g: ["9", "6"],
    h: ["|-|", "]-[", "}-{", "(-)", ")-(", "#"],
    i: ["1", "!", "]["],
    j: ["_|"],
    k: ["|<", "|{"],
    l: ["|_"],
    n: ["||"],
    o: ["0"],
    p: ["|2", "|D"],
    q: ["(,)"],
    r: ["|Z", "|?"],
    s: ["5", "$"],
    t: ["+", "7"],
    v: ["|/", "/"],
    w: ["^/", "//"],
    x: ["><", "}{"],
    y: ["`/"],
    z: ["()"],
  };

  const indexSumbols = {};

  let resultStr = "";

  const array = str.split("");
  for (let i = 0; i < array.length; i++) {
    const symbol = array[i];
    if (patternSymbols[symbol] && indexSumbols[symbol] !== undefined && indexSumbols[symbol] !== patternSymbols[symbol].length - 1) {
      indexSumbols[symbol] += 1;
    } else {
      indexSumbols[symbol] = 0;
    }

    if (patternSymbols[symbol]) {
      resultStr += patternSymbols[symbol][indexSumbols[symbol]];
    } else {
      resultStr += symbol;
    }
  }

  return resultStr;
}

console.log(toLeet("no no no no no"));
