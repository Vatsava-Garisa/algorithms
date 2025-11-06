
/*
Time - O(n)
Space - O(n)
*/
function linear(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            return i;
        }
    }
    return -1;
}

