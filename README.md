# Type 'string' is not assignable to type 'void' Bug

This repository demonstrates a common TypeScript error: assigning a string return type to a function that is implicitly declared as void.

## Bug Description
The `greet` function is defined to return a string.  However, the `console.log` statement within the function doesn't have a return value.  The compiler then expects the function to return void. Attempting to assign the function's return value to a variable leads to a type error.

## How to Reproduce
1. Clone the repository.
2. Open `bug.ts` in a TypeScript compiler.
3. Compile the code using a TypeScript compiler (like `tsc`).
4. Observe the type error.

## Solution
The solution involves explicitly defining the return type of the function or removing the assignment statement if the returned value is not used.