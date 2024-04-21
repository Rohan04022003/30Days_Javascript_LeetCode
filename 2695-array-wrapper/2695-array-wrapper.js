class ArrayWrapper {
  constructor(array) {
    this.array = array;
  }
  
  // Overriding the toString method
  toString() {
    return `[${this.array.join(',')}]`;
  }
  
  // Overriding the valueOf method
  valueOf() {
    return this.array.reduce((sum, num) => sum + num, 0);
  }
}

// Test cases
function operateOnArrays(nums, operation) {
  const obj1 = new ArrayWrapper(nums[0]);
  const obj2 = new ArrayWrapper(nums[1]);
  
  if (operation === "Add") {
    return obj1 + obj2;
  } else if (operation === "String") {
    return String(obj1);
  } else {
    return "Invalid operation";
  }
}

console.log(operateOnArrays([[1,2],[3,4]], "Add")); // Output: 10
console.log(operateOnArrays([[23,98,42,70]], "String")); // Output: "[23,98,42,70]"
console.log(operateOnArrays([[],[]], "Add")); // Output: 0
