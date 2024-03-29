function reduce(nums, fn, init) {

    if (nums.length === 0) {
        return init;
    }

    let accumulator = init;

    for (let i = 0; i < nums.length; i++) {
        accumulator = fn(accumulator, nums[i]);
    }

    return accumulator;
}

console.log(reduce([1, 2, 3, 4], function sum(accum, curr) { return accum + curr; }, 0)); 
console.log(reduce([1, 2, 3, 4], function sum(accum, curr) { return accum + curr * curr; }, 100));
console.log(reduce([], function sum(accum, curr) { return 0; }, 25));
