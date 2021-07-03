class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {'length': 0};
  }

  enqueue(value) {
    this.storage[this.storage.length] = value;
    this.storage.length += 1;
  }

  dequeue() {
    if (this.storage.length > 0) {
      var removedValue = this.storage[0];
      delete this.storage[0];
      for (var i = 0; i < this.storage.length - 1; i++) {
        this.storage[i] = this.storage[i + 1];
      }
      delete this.storage[i];

      this.storage.length -= 1;
      return removedValue;
    }
  }

  size() {
    return this.storage.length;
  }

}


var SomeQueue = new Queue();
