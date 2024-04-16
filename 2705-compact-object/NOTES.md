#Compact Object Easy Solution

``` javascript

function compactObject(obj) {
    if (Array.isArray(obj)) {
        return obj.filter(value => Boolean(value)).map(compactObject);
    } else if (typeof obj === 'object' && obj !== null) {
        const result = {};
        Object.entries(obj).forEach(([key, value]) => {
            const compactedValue = compactObject(value);
            if (Boolean(compactedValue)) {
                result[key] = compactedValue;
            }
        });
        return result;
    } else {
        return obj;
    }
}
const obj1 = [null, 0, false, 1];
console.log(compactObject(obj1)); // Output: [1]

const obj2 = {"a": null, "b": [false, 1]};
console.log(compactObject(obj2)); // Output: {"b": [1]}

const obj3 = [null, 0, 5, [0], [false, 16]];
console.log(compactObject(obj3)); // Output: [5, [], [16]]


```
