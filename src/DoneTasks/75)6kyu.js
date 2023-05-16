// Напишите функцию, которая принимает строку фигурных скобок и определяет,
//  допустим ли порядок фигурных скобок. Он должен возвращаться true, если строка действительна и falseнедействительна.

// Этот Kata похож на Kata Valid Parentheses , но вводит новые символы: скобки []и фигурные скобки {}.

// Все входные строки будут непустыми и будут состоять только из круглых, квадратных и фигурных скобок: ()[]{}.

// Что считается действительным?
// Строка фигурных скобок считается допустимой, если все фигурные скобки соответствуют правильной фигурной скобке.

// Примеры
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

function validBraces(braces) {
  let closedBrackets = [")", "}", "]"];
  let openedBrackets = ["(", "{", "["];
  let stack = [];
  let matchingBrackets = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let i = 0; i < braces.length; i++) {
    let tempBraces = braces[i];
    if (openedBrackets.includes(tempBraces)) {
      stack.push(tempBraces);
    } else if (closedBrackets.includes(tempBraces)) {
      let endBraces = stack.pop();
      if (matchingBrackets[endBraces] !== tempBraces) {
        return false;
      }
    }
  }
  return true;
}

console.log(validBraces("(){}[]]"));
