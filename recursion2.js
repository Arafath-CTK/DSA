function recursionTest(num) {
  if (num <= 1) {
    return;
  }
  recursionTest(num - 1);
  console.log(num);
  recursionTest(num - 1);
}

recursionTest(4);
