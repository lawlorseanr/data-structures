class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }
  push(value) {
    var indexToBe = Object.keys(this.storage).length;
    this.storage[indexToBe] = value;
  }
  pop () {
    var popedItem = this.storage[Object.keys(this.storage).length - 1];
    delete this.storage[Object.keys(this.storage).length - 1];
    return popedItem;
  }
  size () {
    return Object.keys(this.storage).length;
  }
}