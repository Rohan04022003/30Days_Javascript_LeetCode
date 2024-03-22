## Simple Solution Using Closures

​```javascript
function createCounter(n){
    return function(){
        return n++;
    }
}

let n = 10
let counterFunction = createCounter(n);
let output =[];

for(let i = 0; i <= 2; i++){
    output.push(counterFunction())
}
console.log(output)

n= -2;
counterFunction = createCounter(n);
output = [];
for(let i = 0; i < 5; i++){
    output.push(counterFunction())
}

console.log(output)
```
