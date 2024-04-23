function promiseAll(functions) {
  const results = [];
  let completed = 0;
  let rejected = false;
  let rejectionReason;

  return new Promise((resolve, reject) => {
    functions.forEach((func, index) => {
      func().then(value => {
        results[index] = value;
        completed++;
        if (completed === functions.length && !rejected) {
          resolve(results);
        }
      }).catch(reason => {
        rejected = true;
        rejectionReason = reason;
        reject(reason); // Reject immediately on first rejection
      });
    });
  });
}


// Example usage:
const functions1 = [
  () => new Promise(resolve => setTimeout(() => resolve(5), 200))
];

const functions2 = [
  () => new Promise(resolve => setTimeout(() => resolve(1), 200)), 
  () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
];

const functions3 = [
  () => new Promise(resolve => setTimeout(() => resolve(4), 50)), 
  () => new Promise(resolve => setTimeout(() => resolve(10), 150)), 
  () => new Promise(resolve => setTimeout(() => resolve(16), 100))
];

promiseAll(functions1)
  .then(console.log)
  .catch(console.error);

promiseAll(functions2)
  .then(console.log)
  .catch(console.error);

promiseAll(functions3)
  .then(console.log)
  .catch(console.error);