# Array Reduce Transformation Easy Solution
``` javascript
function reduce(nums, fn, init) {
    // If the array is empty, return init
    if (nums.length === 0) {
        return init;
    }

    // Initialize the accumulator with the initial value
    let accumulator = init;

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // Apply the reducer function to the current element and the accumulator
        accumulator = fn(accumulator, nums[i]);
    }

    // Return the final result
    return accumulator;
}

// Test cases
console.log(reduce([1, 2, 3, 4], function sum(accum, curr) { return accum + curr; }, 0)); // Output: 10
console.log(reduce([1, 2, 3, 4], function sum(accum, curr) { return accum + curr * curr; }, 100)); // Output: 130
console.log(reduce([], function sum(accum, curr) { return 0; }, 25)); // Output: 25

```
