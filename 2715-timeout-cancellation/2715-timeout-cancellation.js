function cancellable(fn, args, t) {
    let cancelled = false;
    let timeoutId;

    const cancelFn = () => {
        cancelled = true;
        clearTimeout(timeoutId);
    };

    const executeFn = () => {
        if (!cancelled) {
            return fn(...args);
        }
    };

    timeoutId = setTimeout(executeFn, t);

    return cancelFn;
}

// Test Example 1
const cancelTimeMs1 = 50;
const cancelFn1 = cancellable((x) => x * 5, [2], 20);
setTimeout(() => {
    console.log(cancelFn1); // Should output [{"time":20,"returned":10}]
}, cancelTimeMs1);

// Test Example 2
const cancelTimeMs2 = 50;
const cancelFn2 = cancellable((x) => x**2, [2], 100);
setTimeout(() => {
    console.log(cancelFn2); // Should output []
}, cancelTimeMs2);

// Test Example 3
const cancelTimeMs3 = 100;
const cancelFn3 = cancellable((x1, x2) => x1 * x2, [2,4], 30);
setTimeout(() => {
    console.log(cancelFn3); // Should output [{"time":30,"returned":8}]
}, cancelTimeMs3);
