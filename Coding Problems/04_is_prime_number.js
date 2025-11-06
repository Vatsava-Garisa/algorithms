
/*
Time - O(n)
Space - O(1)
*/
function solution_1(n) {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}
/*****************************************************************************************************************************/
/*
Time - O(√n)
Space - O(1)
*/
function solution_2(n) {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }

    return true;
}
