# Promise Time Limit Easy Solution

``` javascript

function timeLimit(fn, t) {
  return async function(...args) {
    return new Promise(async (resolve, reject) => {
      const timeout = new Promise((_, reject) => setTimeout(() => reject("Time Limit Exceeded"), t));
      try {
        const result = await Promise.race([fn(...args), timeout]);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  };
}

// Example usage:

const fn1 = async (n) => { 
  await new Promise(res => setTimeout(res, 100)); 
  return n * n; 
};
const inputs1 = [5];
const t1 = 50;

const limited1 = timeLimit(fn1, t1);
const start1 = Date.now();

limited1(...inputs1)
  .then(resolved => console.log({"resolved": resolved, "time": Date.now() - start1}))
  .catch(rejected => console.log({"rejected": rejected, "time": Date.now() - start1}));

const fn2 = async (n) => { 
  await new Promise(res => setTimeout(res, 100)); 
  return n * n; 
};
const inputs2 = [5];
const t2 = 150;

const limited2 = timeLimit(fn2, t2);
const start2 = Date.now();

limited2(...inputs2)
  .then(resolved => console.log({"resolved": resolved, "time": Date.now() - start2}))
  .catch(rejected => console.log({"rejected": rejected, "time": Date.now() - start2}));

const fn3 = async (a, b) => { 
  await new Promise(res => setTimeout(res, 120)); 
  return a + b; 
};
const inputs3 = [5, 10];
const t3 = 150;

const limited3 = timeLimit(fn3, t3);
const start3 = Date.now();

limited3(...inputs3)
  .then(resolved => console.log({"resolved": resolved, "time": Date.now() - start3}))
  .catch(rejected => console.log({"rejected": rejected, "time": Date.now() - start3}));

const fn4 = async () => { 
  throw "Error";
};
const inputs4 = [];
const t4 = 1000;

const limited4 = timeLimit(fn4, t4);
const start4 = Date.now();

limited4(...inputs4)
  .then(resolved => console.log({"resolved": resolved, "time": Date.now() - start4}))
  .catch(rejected => console.log({"rejected": rejected, "time": Date.now() - start4}));


```
