
/*
Time - O(n)
Space - O(1)
*/
function solution_1(n) {
    if (n <= 0) {
        return 1;
    }

    let factorial = 1;

    while (n > 1) {
        factorial *= n;
        n--;
    }

    return factorial;
}
/*****************************************************************************************************************************/
/*
Time - O()
Space - O(1)
*/
let numbers_array = [];
function solution_2(n) {
    if (n <= 0) {
        return 1;
    }

    return n * solution_2(n - 1);
}
