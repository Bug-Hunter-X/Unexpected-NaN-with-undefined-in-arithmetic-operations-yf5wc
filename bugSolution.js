function foo(a, b) {
  a = a === undefined ? 0 : a; // Handle undefined
  b = b === undefined ? 0 : b; // Handle undefined
  a = a === null ? 0 : a; //Handle null
  b = b === null ? 0 : b; //Handle null
  // Ensure both a and b are numbers before adding
  a = typeof a === 'number' ? a : 0;
  b = typeof b === 'number' ? b : 0;
  return a + b;
}

console.log(foo(undefined, 5)); // 5
console.log(foo(null, 5)); // 5
console.log(foo(10,null)); //10
console.log(foo(null,undefined)); //0