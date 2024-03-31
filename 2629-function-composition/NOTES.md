# Function Composition

``` javascript
var compose = function(functions) {
    return function(x) {
        return functions.reduceRight((acc, fn) => fn(acc), x);
    };
};

// Test cases
const functions1 = [x => x + 1, x => x * x, x => 2 * x];
console.log(compose(functions1)(4)); // Output: 65

const functions2 = [x => 10 * x, x => 10 * x, x => 10 * x];
console.log(compose(functions2)(1)); // Output: 1000

const functions3 = [];
console.log(compose(functions3)(42)); // Output: 42


```
