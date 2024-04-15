function flat(arr, n) {
    function flatHelper(arr, depth) {
        let result = [];
        for (let elem of arr) {
            if (Array.isArray(elem) && depth < n) {
                result.push(...flatHelper(elem, depth + 1));
            } else {
                result.push(elem);
            }
        }
        return result;
    }
    
    return flatHelper(arr, 0);
}

// Test cases
const arr1 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
const n1 = 0;
console.log(flat(arr1, n1));  // Output: [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

const arr2 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
const n2 = 1;
console.log(flat(arr2, n2));  // Output: [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]

const arr3 = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
const n3 = 2;
console.log(flat(arr3, n3));  // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
