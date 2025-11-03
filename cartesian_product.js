
/*
Time: O(mn)
Space: O(mn)
*/
function solution_1(arr1, arr2) {
    let output = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            output.push([arr1[i], arr2[j]]);
        }
    }

    return output;
}
/*****************************************************************************************************************************/
/*
Time: O(mn)
Space: O(1)
*/
function* cartesianProduct(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            yield [arr1[i], arr2[j]];
        }
    }
}

console.log([...cartesianProduct([1, 2], [3, 4, 5])]);
