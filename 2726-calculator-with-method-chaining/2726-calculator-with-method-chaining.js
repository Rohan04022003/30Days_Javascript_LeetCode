class Calculator {
    constructor(initialResult) {
        this.result = initialResult;
    }

    add(value) {
        this.result += value;
        return this;
    }

    subtract(value) {
        this.result -= value;
        return this;
    }

    multiply(value) {
        this.result *= value;
        return this;
    }

    divide(value) {
        if (value === 0) {
            throw new Error("Division by zero is not allowed");
        }
        this.result /= value;
        return this;
    }

    power(value) {
        this.result **= value;
        return this;
    }

    getResult() {
        return this.result;
    }
}

// Example usage:
const actions = ["Calculator", "add", "subtract", "getResult"];
const values = [10, 5, 7];

// Initialize Calculator
const calc = new Calculator(values[0]);

// Perform actions
for (let i = 1; i < actions.length; i++) {
    const action = actions[i];
    const value = values[i];
    try {
        if (action === "add") {
            calc.add(value);
        } else if (action === "subtract") {
            calc.subtract(value);
        } else if (action === "getResult") {
            const result = calc.getResult();
            console.log(result);
        }
    } catch (error) {
        console.error(error.message);
        break;
    }
}
