class EventEmitter {
  constructor() {
    this.events = new Map();
    this.subscriptionId = 0;
  }

  subscribe(eventName, callback) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }
    const id = ++this.subscriptionId;
    this.events.get(eventName).push({ id, callback });

    const unsubscribe = () => {
      const subscribers = this.events.get(eventName);
      const index = subscribers.findIndex(sub => sub.id === id);
      if (index !== -1) {
        subscribers.splice(index, 1);
        return undefined;
      }
    };

    return { unsubscribe };
  }

  emit(eventName, args = []) {
    if (!this.events.has(eventName)) {
      return [];
    }

    const subscribers = this.events.get(eventName);
    const results = subscribers.map(sub => sub.callback(...args));
    return results;
  }
}

// Example usage:

const emitter = new EventEmitter();

// Example 1:
console.log(emitter.emit("firstEvent")); // []
const sub1 = emitter.subscribe("firstEvent", () => 5);
const sub2 = emitter.subscribe("firstEvent", () => 6);
console.log(emitter.emit("firstEvent")); // [5, 6]
sub1.unsubscribe();
console.log(sub1.unsubscribe()); // undefined
console.log(emitter.emit("firstEvent")); // [6]

// Example 2:
const sub3 = emitter.subscribe("secondEvent", (...args) => args.join(','));
console.log(emitter.emit("secondEvent", [1, 2, 3])); // ["1,2,3"]
console.log(emitter.emit("secondEvent", [3, 4, 6])); // ["3,4,6"]

// Example 3:
const sub4 = emitter.subscribe("thirdEvent", (...args) => args.join(','));
console.log(emitter.emit("thirdEvent", [1, 2, 3])); // ["1,2,3"]
console.log(sub4.unsubscribe()); // undefined
console.log(emitter.emit("thirdEvent", [4, 5, 6])); // []

// Example 4:
const sub5 = emitter.subscribe("fourthEvent", x => x + 1);
const sub6 = emitter.subscribe("fourthEvent", x => x + 2);
console.log(emitter.emit("fourthEvent", [5])); // [7]
sub5.unsubscribe();
console.log(emitter.emit("fourthEvent", [5])); // [7]
