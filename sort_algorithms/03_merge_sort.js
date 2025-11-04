
/*
Time: O(nlog(n))
Space: O(n)
*/
function solution_1(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left_arr = solution_1(arr.slice(0, mid));
    let right_arr = solution_1(arr.slice(mid));
    let output = [];

    let i = 0;
    let j = 0;
    while (i < left_arr.length && j < right_arr.length) {
        if (left_arr[i] <= right_arr[j]) {
            output.push(left_arr[i]);
            i++
        } else {
            output.push(right_arr[j]);
            j++;
        }
    }

    return [...output, ...left_arr.slice(i), ...right_arr.slice(j)];
}
/*****************************************************************************************************************************/
/*
Time: O(nlog(n))
Space: O(n)
*/
function mergeSort(arr) {
    // Base case: a single element is already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // 1. Divide: find the middle index
    const mid = Math.floor(arr.length / 2);

    // 2. Conquer: recursively sort the left and right halves
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    // 3. Combine: merge the two sorted halves
    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;

    // Compare elements from both halves and merge in sorted order
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Add any remaining elements from either half
    return result.concat(left.slice(i)).concat(right.slice(j));
}

