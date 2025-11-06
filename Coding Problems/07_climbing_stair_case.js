
/* Count Only
Time: O(n)
Space: O(1)
*/
function climbStairs(n) {
    if (n <= 2) return n;

    let a = 1, b = 2;
    for (let i = 3; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}
/*****************************************************************************************************************************/
/* Combinations
Time: O(n^2)
Space: O(n^2)
*/
function solution_1(n) {
    if (n <= 0) return [];

    const output = [];

    let ones_array = [];
    for (let i = 0; i < n; i++) {
        ones_array.push(1);
    }
    output.push(ones_array);

    let mixed_array = [];
    for (let i = 0; i < ones_array.length; i++) {
        if (ones_array[i] + ones_array[i + 1] == 2) {
            mixed_array = [...ones_array.slice(0, i - 1 < 0 ? 0 : i), 2, ...ones_array.slice(i + 2)];
            if (!output.includes(mixed_array)) {
                output.push(mixed_array);
                mixed_array = [];
            }

            if (ones_array[i + 2] + ones_array[i + 3] == 2) {
                mixed_array = [...ones_array.slice(0, i - 1 < 0 ? 0 : i), 2, 2, ...ones_array.slice(i + 4)];
                if (!output.includes(mixed_array)) {
                    output.push(mixed_array);
                    mixed_array = [];
                }
            }
        }


    }

    return output;
}
/*****************************************************************************************************************************/
/* Combinations
Time: O(2^n)
Space: O(n + k)
*/
function climbStairsCombinations(n) {
    const result = [];

    function backtrack(remaining, path) {
        if (remaining === 0) {
            result.push([...path]); // Found a valid combination
            return;
        }

        if (remaining < 0) return; // Invalid path

        // Try taking 1 step
        path.push(1);
        backtrack(remaining - 1, path);
        path.pop();

        // Try taking 2 steps
        path.push(2);
        backtrack(remaining - 2, path);
        path.pop();
    }

    backtrack(n, []);
    return result;
}
