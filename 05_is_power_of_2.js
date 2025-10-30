
/*
Time - O(log(n))
Space - O(1)
*/
function solution_1(n) {
    if (n < 1) {
        return false;
    }

    while (n > 1) {
        if (n % 2 != 0) {
            return false;
        }
        n = n / 2;
    }

    return true;
}
/*****************************************************************************************************************************/
/*
Time - O(1)
Space - O(1)
*/
function solution_2(n) {
    if (n < 1) {
        return false;
    }

    return (n & (n - 1)) === 0;
}
