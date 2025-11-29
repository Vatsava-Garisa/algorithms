
/* Return the third highest and third lowest elements in an array without using index. */

let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function mySolution(arr, n) {
    if (arr.length < n) {
        console.log('Insufficient array');
        return;
    }

    arr = arr.sort((a, b) => b - a);

    return {
        'Lowest': arr[arr.length - n],
        'Highest': arr[n - 1]
    }
}
console.log(mySolution(myArr, 3));

/*****************************************************************************************************************************/

function solution(arr) {
    if (arr.length < 3) {
        console.log('Insufficient array');
        return;
    }

    let min1 = Infinity;
    let min2 = Infinity;
    let min3 = Infinity;

    let max1 = -Infinity;
    let max2 = -Infinity;
    let max3 = -Infinity;

    for (let num of arr) {

        /* Minimum */
        if (num < min1) {
            min3 = min2;
            min2 = min1;
            min1 = num;
        } else if (num < min2) {
            min3 = min2;
            min2 = num;
        } else if (num < min3) {
            min3 = num;
        }

        /* Maximum */
        if (num > max1) {
            max3 = max2;
            max2 = max1;
            max1 = num;
        } else if (num > max2) {
            max3 = max2;
            max2 = num;
        } else if (num > max3) {
            max3 = num;
        }
    }

    return { min3, max3 };
}
