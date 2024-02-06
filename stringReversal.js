let strReverse = (str) =>
  str.length <= 1 ? str : strReverse(str.slice(1)) + str[0];

  console.log(strReverse("hello"));