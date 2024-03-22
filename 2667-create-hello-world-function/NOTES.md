​# Intuition
The provided code demonstrates a pattern where a higher-order function is used to create and return another function. This returned function has a specific behavior, in this case, returning a greeting message. We can leverage this pattern to create personalized greeting functions based on the input provided to the higher-order function.

# Approach
We'll define a function createGreeting that takes a name parameter. This function will return another function that, when called, generates a personalized greeting message using the provided name. By utilizing this approach, we can easily create multiple greeting functions for different names.

# Complexity
- Time complexity:
The time complexity of our solution is constant (O(1)) because generating a greeting message involves simple string concatenation, which doesn't depend on the size of any input.

- Space complexity:
The space complexity is also constant (O(1)) because we're not storing any additional data structures proportional to the input size. We're only creating function closures, which have a negligible impact on memory usage.

# Code
```javascript
function createHelloWorld(){
    return function(){
        return "Hello World"
    }
}

const f = createHelloWorld();
console.log(f());
console.log(f({}, null, 42));
```
