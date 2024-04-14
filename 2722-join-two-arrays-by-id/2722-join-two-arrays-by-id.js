function join(arr1, arr2) {
    // Create a map to store merged objects based on id
    let mergedMap = new Map();
    
    // Merge objects from arr1
    arr1.forEach(obj => {
        mergedMap.set(obj.id, obj);
    });
    
    // Merge objects from arr2, overriding values from arr1
    arr2.forEach(obj => {
        let id = obj.id;
        if (mergedMap.has(id)) {
            // Merge properties, overriding values from arr1
            Object.keys(obj).forEach(key => {
                if (key !== 'id') {
                    mergedMap.get(id)[key] = obj[key];
                }
            });
        } else {
            // If id doesn't exist in arr1, add the object to mergedMap
            mergedMap.set(id, obj);
        }
    });
    
    // Convert the map back to an array
    let joinedArray = Array.from(mergedMap.values());
    
    // Sort the array based on the id key
    joinedArray.sort((a, b) => a.id - b.id);
    
    return joinedArray;
}

// Example usage
let arr1 = [
    {"id": 1, "x": 1},
    {"id": 2, "x": 9}
];

let arr2 = [
    {"id": 3, "x": 5}
];

console.log(join(arr1, arr2)); // Output: [{"id": 1, "x": 1}, {"id": 2, "x": 9}, {"id": 3, "x": 5}]
