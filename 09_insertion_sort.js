
/*
Time: O(n^2)
Space: O(1)
*/
function solution_1(arr) {
    if (arr.length <= 1) return arr;

    for (let i = 1; i < arr.length; i++) {

        let key = arr[i];
        let j = i - 1;

        while (j >= 0) {
            if (arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            } else {
                break;
            }
        }

        arr[j + 1] = key;
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
    if (arr.length == 1) return arr;

    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = current;
    }

    return arr;
}
