// Factorial of a number through recursion

function factorial(num) {
  return num === 0 ? 1 : num * factorial(num - 1);
}

console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(0));
console.log(factorial(1));
