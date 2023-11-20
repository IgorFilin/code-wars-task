// ROT13 — это простой шифр замены букв, который заменяет букву буквой,
//  находящейся через 13 букв после нее в алфавите. ROT13 — пример шифра Цезаря.

// Создайте функцию, которая принимает строку и возвращает строку,
//  зашифрованную с помощью Rot13. Если в строку включены цифры или специальные символы,
//   их следует вернуть в исходном виде.
// Смещать следует только буквы латинского/английского алфавита,
//  как в оригинальной «реализации» Rot13.

function rot13(message) {
  //your code here
  let encryptedWord = "";
  const rot13 = {
    a: "n",
    b: "o",
    c: "p",
    d: "q",
    e: "r",
    f: "s",
    g: "t",
    h: "u",
    i: "v",
    j: "w",
    k: "x",
    l: "y",
    m: "z",
    n: "a",
    o: "b",
    p: "c",
    q: "d",
    r: "e",
    s: "f",
    t: "g",
    u: "h",
    v: "i",
    w: "j",
    x: "k",
    y: "l",
    z: "m",
  };

  for (let i = 0; i < message.length; i++) {
    if (rot13[message[i].toLowerCase()]) {
      encryptedWord +=
        message[i] === message[i].toUpperCase()
          ? rot13[message[i].toLowerCase()].toUpperCase()
          : rot13[message[i].toLowerCase()];
    } else {
      encryptedWord += message[i];
    }
  }

  return encryptedWord;
}

console.log(rot13("Test"));

// https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript
