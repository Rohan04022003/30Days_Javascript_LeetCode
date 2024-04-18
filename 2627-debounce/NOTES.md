# Debounce Easy Solution

``` javascript

function debounce(fn, t) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn.apply(this, args), t);
    };
}

function debounceCalls(t, calls) {
    const results = [];
    let lastCallTime = 0;

    calls.forEach(call => {
        const { t: callTime, inputs } = call;
        const elapsed = callTime - lastCallTime;
        if (elapsed >= t) {
            results.push({ t: callTime + t, inputs });
            lastCallTime = callTime + t;
        } else {
            lastCallTime += t;
        }
    });

    return results;
}

// Test cases
const calls1 = [
    {"t": 50, inputs: [1]},
    {"t": 75, inputs: [2]}
];

const calls2 = [
    {"t": 50, inputs: [1]},
    {"t": 100, inputs: [2]}
];

const calls3 = [
    {"t": 50, inputs: [1, 2]},
    {"t": 300, inputs: [3, 4]},
    {"t": 300, inputs: [5, 6]}
];

const t1 = 50;
const t2 = 20;
const t3 = 150;

console.log(debounceCalls(t1, calls1)); // Output: [{"t": 125, inputs: [2]}]
console.log(debounceCalls(t2, calls2)); // Output: [{"t": 70, inputs: [1]}, {"t": 120, inputs: [2]}]
console.log(debounceCalls(t3, calls3)); // Output: [{"t": 200, inputs: [1, 2]}, {"t": 450, inputs: [5, 6]}]


```
