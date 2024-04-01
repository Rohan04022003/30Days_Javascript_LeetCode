
var argumentsLength = function(...args) {
    let length = args.length
    return length
};

console.log(argumentsLength(5))
console.log(argumentsLength({}, null, "3"))