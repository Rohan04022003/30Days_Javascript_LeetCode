function cancellable(fn, args, t) {
    let intervalId;
    let time = 0;
    const result = [];

    const executeFn = () => {
        const returnValue = fn(...args);
        result.push({ time, returned: returnValue });
    };

    executeFn(); // Initial execution

    intervalId = setInterval(() => {
        time += t;
        executeFn();
    }, t);

    const cancelFn = () => {
        clearInterval(intervalId);
        console.log('Cancelled at', time);
    };

    return cancelFn;
}

// Example usage
const cancelTimeMs = 190;
const cancelFn1 = cancellable((x) => x * 2, [4], 35);
setTimeout(cancelFn1, cancelTimeMs);

const cancelTimeMs2 = 165;
const cancelFn2 = cancellable((x1, x2) => (x1 * x2), [2, 5], 30);
setTimeout(cancelFn2, cancelTimeMs2);

const cancelTimeMs3 = 180;
const cancelFn3 = cancellable((x1, x2, x3) => (x1 + x2 + x3), [5, 1, 3], 50);
setTimeout(cancelFn3, cancelTimeMs3);
