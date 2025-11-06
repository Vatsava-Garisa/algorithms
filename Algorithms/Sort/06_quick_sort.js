
/*
Time: Worst Case - O(n^2) | Average Case - O(nlog(n))
Space: O(n)
*/
function solution_1(arr) {
    if (!arr.length || arr.length == 1) return arr;

    let pivot = arr[arr.length - 1];
    const left_arr = [];
    const right_arr = [];

    for (let i = 0; i < arr.length - 1; i++) {
        (arr[i] <= pivot) ? left_arr.push(arr[i]) : right_arr.push(arr[i]);
    }

    return [...solution_1(left_arr), pivot, ...solution_1(right_arr)];
}
/*****************************************************************************************************************************/
/*
Time: Worst Case - O(n^2) | Average Case - O(nlog(n))
Space: O(log(n))
*/
function quickSortInPlace(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        // Partition the array and get the pivot index
        const pivotIndex = partition(arr, low, high);

        // Recursively sort elements before and after partition
        quickSortInPlace(arr, low, pivotIndex - 1);
        quickSortInPlace(arr, pivotIndex + 1, high);
    }

    return arr;
}

function partition(arr, low, high) {
    const pivot = arr[high]; // choose last element as pivot
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]; // swap smaller element to left partition
        }
    }

    // Place pivot at the correct position
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

    return i + 1; // return pivot index
}
