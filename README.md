# Unexpected NaN with undefined in arithmetic operations

This repository demonstrates a common JavaScript pitfall: unexpected behavior when performing arithmetic operations with `undefined` and `null`.

## The Bug

The `foo` function is designed to add two numbers. However, if you pass `undefined` as an argument, the result is `NaN`.  Passing `null` gives a different (but potentially equally surprising) result.

## The Solution

The best solution is to explicitly check for and handle these values, ensuring you're working with numbers before performing the addition.

## How to reproduce

1. Clone the repository.
2. Run `node bug.js` to observe the unexpected results.
3. Run `node bugSolution.js` to see the corrected behavior.