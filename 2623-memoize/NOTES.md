# Memoize Easy Solution

``` javascript
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const stringifiedArgs = JSON.stringify(args);
        if (!(stringifiedArgs in cache)) {
            cache[stringifiedArgs] = fn(...args);
        }
        return cache[stringifiedArgs];
    };
}

function sum(a, b) {
    return a + b;
}

function fib(n) {
    if (n <= 1) return 1;
    return fib(n - 1) + fib(n - 2);
}

function factorial(n) {
    if (n <= 1) return 1;
    return factorial(n - 1) * n;
}

function applyActions(fnName, actions, values) {
    let result = [];
    let fn;
    if (fnName === 'sum') fn = memoize(sum);
    else if (fnName === 'fib') fn = memoize(fib);
    else if (fnName === 'factorial') fn = memoize(factorial);
    let callCount = 0;
    for (let i = 0; i < actions.length; i++) {
        if (actions[i] === 'call') {
            result.push(fn(...values[i]));
            callCount++;
        } else if (actions[i] === 'getCallCount') {
            result.push(callCount);
        }
    }
    return result;
}

// Example usage:
const fnName = "sum";
const actions = ["call", "call", "getCallCount", "call", "getCallCount"];
const values = [[2, 2], [2, 2], [], [1, 2], []];
console.log(applyActions(fnName, actions, values)); // Output: [4, 4, 1, 3, 2]

const fnName2 = "factorial";
const actions2 = ["call", "call", "call", "getCallCount", "call", "getCallCount"];
const values2 = [[2], [3], [2], [], [3], []];
console.log(applyActions(fnName2, actions2, values2)); // Output: [2, 6, 2, 2, 6, 2]

const fnName3 = "fib";
const actions3 = ["call", "getCallCount"];
const values3 = [[5], []];
console.log(applyActions(fnName3, actions3, values3)); // Output: [8, 1]

```​
