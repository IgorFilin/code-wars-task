var capitals = function (word) {
  // Write your code here
  const result = word.split("").map((el, index) => {
    if (el === el.toUpperCase()) {
      return index;
    }
  });
  return result.filter((el) => el !== undefined);
};

console.log(capitals("CodEWaRs"));
