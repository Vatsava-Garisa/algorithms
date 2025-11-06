
/*
Time - O(n)
Space - O(n)
*/
function solution_1(n) {
    if (n <= 0) {
        return 'NaN';
    }
    if (n <= 1) {
        return n;
    }

    let numbers_array = [0, 1];

    for (let i = 2; i <= n; i++) {
        numbers_array.push(numbers_array[i - 1] + numbers_array[i - 2]);
    }

    return numbers_array;
}
/*****************************************************************************************************************************/
/*
Time - O(n)
Space - O(n)
*/
function fib(n) {
    if (n <= 0) {
        return [];
    }
    if (n == 1) {
        return [0];
    }
    if (n == 2) {
        return [0, 1];
    }

    const output = fib(n - 1);
    output.push(output[output.length - 1] + output[output.length - 2]);
    return output;
}

/*
Call stack grows ↓
──────────────────────────
fib(5)
  ↳ fib(4)
      ↳ fib(3)
          ↳ fib(2)
              ↳ returns[0, 1]
          ← returns[0, 1, 1]
      ← returns[0, 1, 1, 2]
  ← returns[0, 1, 1, 2, 3]
──────────────────────────
Call stack shrinks ↑
*/

/*****************************************************************************************************************************/
/*
Time - O(2^n)
Space - O(n)
*/
function nth_fib(n) {
    if (n <= 0) return 'NaN';
    if (n == 1) return 0;
    if (n == 2) return 1;

    return nth_fib(n - 1) + nth_fib(n - 2);
}
/*
Call stack grows ↓
──────────────────────────
nth_fib(5)
  ↳ nth_fib(4)
      ↳ nth_fib(3) 
          ↳ nth_fib(2)
              ↳ returns 1
          ← returns 1 + 0 = 1
      ← returns 1 + 1 = 2
  ← returns 2 + 1 = 3
──────────────────────────
Call stack shrinks ↑
*/


function fib(n, memo = {}) {
    if (n <= 2) return 1
    if (n in memo) return memo[n]

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
    return memo[n]
}