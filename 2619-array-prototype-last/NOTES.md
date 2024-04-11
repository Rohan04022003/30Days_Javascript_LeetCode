# Array Prototype Last Easy Solution

``` javascript
// Extend Array prototype to include last() method
Array.prototype.last = function() {
    if (this.length === 0) {
        return -1;
    } else {
        return this[this.length - 1];
    }
};

// Example usage
let nums1 = [null, {}, 3];
console.log(nums1.last()); // Output: 3

let nums2 = [];
console.log(nums2.last()); // Output: -1


```
