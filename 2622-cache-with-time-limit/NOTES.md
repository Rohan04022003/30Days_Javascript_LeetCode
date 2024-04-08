## Cache With Time-limit Easy Solution

``` javascript
class TimeLimitedCache {
  constructor() {
    this.cache = new Map();
  }

  set(key, value, duration) {
    const currentTime = Date.now();
    const expirationTime = currentTime + duration;

    if (this.cache.has(key)) {
      const { expiration } = this.cache.get(key);
      if (currentTime < expiration) {
        this.cache.set(key, { value, expiration: expirationTime });
        return true;
      }
    }
    this.cache.set(key, { value, expiration: expirationTime });
    return false;
  }

  get(key) {
    const currentTime = Date.now();
    if (this.cache.has(key)) {
      const { value, expiration } = this.cache.get(key);
      if (currentTime < expiration) {
        return value;
      }
    }
    return -1;
  }

  count() {
    const currentTime = Date.now();
    let count = 0;
    for (const [key, { expiration }] of this.cache) {
      if (currentTime < expiration) {
        count++;
      }
    }
    return count;
  }
}

// Example usage:
const actions = ["TimeLimitedCache", "set", "get", "count", "get"];
const values = [[], [1, 42, 100], [1], [], [1]];
const timeDelays = [0, 0, 50, 50, 150];

const cache = new TimeLimitedCache();

for (let i = 1; i < actions.length; i++) {
  const action = actions[i];
  const params = values[i];
  const delay = timeDelays[i];

  if (action === 'set') {
    const [key, value, duration] = params;
    const result = cache.set(key, value, duration);
    console.log(result);
  } else if (action === 'get') {
    const [key] = params;
    const result = cache.get(key);
    console.log(result);
  } else if (action === 'count') {
    const result = cache.count();
    console.log(result);
  }
}

```
