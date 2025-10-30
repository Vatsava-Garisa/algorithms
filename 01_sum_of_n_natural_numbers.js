
/* 
Time - O(n) 
Space - O(1)
*/
function solution_1(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
/*****************************************************************************************************************************/
/* 
Time - O(1)
Space - O(1)
*/
function solution_2(n) {
    return (n * (n + 1)) / 2;
}
