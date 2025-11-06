
/* The array must always be sorted */

/*
Time - O(log(n))
Space - O(1)
*/
function solution_1(arr, n) {
    if (!arr.length) return false;
    if (n < arr[0] || n > arr[arr.length - 1]) return false;

    let p1 = 0;
    let p2 = arr.length - 1;

    while (p1 < p2) {
        let mid = Math.round((p1 + p2) / 2);
        if (arr[mid] == n) {
            return true;
        }
        if (n > arr[mid]) {
            p1 = mid + 1;
            continue;
        }
        if (n < arr[mid]) {
            p2 = mid - 1;
            continue;
        }
    }

    return false;
}
/*****************************************************************************************************************************/
/*
Time - O(log(n))
Space - O(1)
*/
function solution_2(arr, n, p1 = 0, p2 = arr.length - 1) {
    if (!arr.length) return false;
    if (n < arr[0] || n > arr[arr.length - 1]) return false;

    if (p1 > p2) return false;

    let mid = Math.round((p1 + p2) / 2);

    if (n == arr[mid]) {
        return true;
    } else if (n > arr[mid]) {
        return solution_2(arr, n, mid + 1, p2);
    } else {
        return solution_2(arr, n, p1, mid - 1);
    }
}

console.log(solution_2([12, 20, 35, 100, 200], 100));
