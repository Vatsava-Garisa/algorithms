
/*
Time: O(n^2)
Space: O(1)
*/
function solution_1(arr) {
    if (arr.length <= 1) return arr;

    for (let i = 0; i < arr.length; i++) {
        let min = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        if (min != i) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }

    return arr;
}
/*****************************************************************************************************************************/
/*
Time: O(n^2)
Space: O(1)
*/
function stable_selection_sort(arr) {
    if (arr.length <= 1) return arr;

    for (let i = 0; i < arr.length - 1; i++) {
        // Find the minimum element in the unsorted portion
        let min_index = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min_index]) {
                min_index = j;
            }
        }

        // Extract the min value
        let min_value = arr[min_index];

        // Shift elements right to make space
        while (min_index > i) {
            arr[min_index] = arr[min_index - 1];
            min_index--;
        }

        // Place min_value at correct sorted position
        arr[i] = min_value;
    }

    return arr;
}
