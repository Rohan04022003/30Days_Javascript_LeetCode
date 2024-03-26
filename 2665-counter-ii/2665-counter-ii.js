/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let count = init;
    return{
        increment:function(){
            return ++count;
        },
        decrement:function(){
            return --count;
        },
        reset:function(){
            count = init;
            return count;
        }
    }
};

//Example 1:

const counter1 = createCounter(5);
console.log([counter1.increment(), counter1.reset(), counter1.decrement()])

//Example 2:

const counter2 = createCounter(0);
console.log([counter2.increment(), counter2.increment(), counter2.decrement(), counter2.reset(), counter2.reset()])

