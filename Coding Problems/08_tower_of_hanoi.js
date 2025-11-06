
/*
Time: O(2^n)
Space: O(1)
*/
const towerOfHanoi = (n, origin, destination, temporary) => {
    if (n === 0) return;
    towerOfHanoi(n - 1, origin, temporary, destination);
    console.log(`Disc number ${n} is moved from pile${origin} to pile${destination}.`)
    towerOfHanoi(n - 1, temporary, destination, origin);
}
towerOfHanoi(3, 'A', 'C', 'B');
