​# To Be Or Not To Be
##Easy Solution

``` javascript

function expect(val) {
    return {
        toBe: (otherVal) => {
            if(val === otherVal){
                return true
            }
            else{
                throw new Error ("Not Equal")
            }
        },
        notToBe: (otherVal) => {
            if(val !== otherVal){
                return true
            }
            else{
                throw new Error ("Equal")
            }
        }
    };
}

// Example usage:

try{
    console.log({"value": expect(5).toBe(5)})
}
catch(error){
    console.log({"error": error.message});
}

try {
    console.log({"error": expect(5).toBe(null)})
} catch (error) {
    console.log({"error": error.message});
}

try {
    console.log({"value": expect(5).notToBe(null)})
} catch (error) {
    console.log({"error": error.message});
}
```
