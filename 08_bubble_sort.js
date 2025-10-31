
/*
Time: O(n^2)
Space: O(1)
*/
function solution_1(arr) {
    if (!arr.length) {
        return [];
    }

    let change = true;

    while (change) {
        let change_count = 0;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                change_count++;
            }
        }
        if (!change_count) {
            change = false;
        }
    }

    return arr;
}
/*****************************************************************************************************************************/
/*
Time: O(n^2)
Space: O(1)
*/
function solution_2(arr) {
    if (!arr.length) return [];

    let n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        n--;
    } while (swapped);

    return arr;
}
