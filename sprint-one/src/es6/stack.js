class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {'length': 0};
  }

  push(value) {
    this.storage[this.storage.length] = value;
    this.storage.length += 1;
  }

  pop() {
    if (this.storage.length > 0) {
      var poppedValue = this.storage[this.storage.length - 1];
      delete this.storage[this.storage.length - 1];

      this.storage.length -= 1;
      return poppedValue;
    }
  }

  size() {
    return this.storage.length;
  }

}