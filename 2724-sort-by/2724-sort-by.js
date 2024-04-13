function sortBy(arr, fn) {
    const sortedArr = arr.slice(); // Create a copy of the original array
    sortedArr.sort((a, b) => fn(a) - fn(b));
    return sortedArr;
}

// Example usage:
const arr1 = [5, 4, 1, 2, 3];
const fn1 = (x) => x;
const sortBy1 = sortBy(arr1, fn1);
console.log(sortBy1); // Output: [1, 2, 3, 4, 5]

const arr2 = [{"x": 1}, {"x": 0}, {"x": -1}];
const fn2 = (d) => d.x;
const sortBy2 = sortBy(arr2, fn2);
console.log(sortBy2); // Output: [{"x": -1}, {"x": 0}, {"x": 1}]

const arr3 = [[3, 4], [5, 2], [10, 1]];
const fn3 = (x) => x[1];
const sortBy3 = sortBy(arr3, fn3);
console.log(sortBy3); // Output: [[10, 1], [5, 2], [3, 4]]
