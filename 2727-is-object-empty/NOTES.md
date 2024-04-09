# Is Object Empty Solution 

``` javascript
function isEmpty(obj) {
  if (Array.isArray(obj)) {
    return obj.length === 0;
  } else if (typeof obj === 'object' && obj !== null) {
    return Object.keys(obj).length === 0;
  }
  return false; // Neither object nor array
}

// Test examples
console.log(isEmpty({"x": 5, "y": 42})); // Output: false
console.log(isEmpty({})); // Output: true
console.log(isEmpty([null, false, 0])); // Output: false

```​
