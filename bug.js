function foo(a, b) {
  return a + b;
}

console.log(foo(undefined, 5)); // NaN
console.log(foo(null, 5)); // 5