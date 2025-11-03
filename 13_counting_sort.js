
/*
Counting Sort is a non-comparative sorting algorithm that sorts a collection of non-negative integers by counting the number of occurrences of each unique element.
It then uses these counts to determine the positions of each element in the sorted output array.
It works efficiently when the input range (0 → k) is not significantly greater than the number of elements (n).
*/
/*****************************************************************************************************************************/
/*
Time: O(n+k)
Space: O(n+k)
*/
function solution_1(arr) {
    if (arr.length <= 1) return arr;

    let max;

    for (let i = 0; i < arr.length; i++) {
        if (!max) {
            max = arr[i];
            continue;
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    let starting_indexes_array = new Array(max + 1).fill(0);

    for (let i = 0; i < arr.length; i++) {
        starting_indexes_array[arr[i]]++;
    }

    for (let i = 1; i < starting_indexes_array.length; i++) {
        starting_indexes_array[i] = starting_indexes_array[i] + starting_indexes_array[i - 1];
    }

    let idx_array = new Array(max + 1).fill(0);
    for (let i = 1; i < idx_array.length; i++) {
        idx_array[i] = starting_indexes_array[i - 1];
    }

    let output = new Array(arr.length);

    for (let i = 0; i < arr.length; i++) {
        output[idx_array[arr[i]]] = arr[i];
        idx_array[arr[i]]++;
    }

    return output;
}
/*****************************************************************************************************************************/
/*
Time: O(n+k)
Space: O(n+k)
*/
function countingSort(arr) {
    if (arr.length <= 1) return arr;

    // Step 1: Find the maximum value
    const max = Math.max(...arr);

    // Step 2: Initialize count array
    const count = new Array(max + 1).fill(0);

    // Step 3: Count each element
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }

    // Step 4: Compute prefix sums (cumulative counts)
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    // Step 5: Build output array (stable sort)
    const output = new Array(arr.length);
    for (let i = arr.length - 1; i >= 0; i--) {
        const value = arr[i];
        const position = count[value] - 1;
        output[position] = value;
        count[value]--;
    }

    // Step 6: Return sorted array
    return output;
}

function countingSort(arr) {
    if (arr.length <= 1) return arr;

    // Step 1: Find min and max
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const range = max - min + 1;

    // Step 2: Initialize count array
    const count = new Array(range).fill(0);

    // Step 3: Count each element (shifted by min)
    for (let i = 0; i < arr.length; i++) {
        count[arr[i] - min]++;
    }

    // Step 4: Compute prefix sums
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    // Step 5: Build the output array (stable version)
    const output = new Array(arr.length);
    for (let i = arr.length - 1; i >= 0; i--) {
        const value = arr[i];
        const position = count[value - min] - 1;
        output[position] = value;
        count[value - min]--;
    }

    // Step 6: Return sorted array
    return output;
}
