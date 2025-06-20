// Creating custom array
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  // custom push method
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  // custom get method
  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index out of range");
    }
    return this.data[index];
  }

  // custom pop method
  pop() {
    if (this.length === 0) {
      throw new Error("Array is empty");
    }
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  // custom shift method
  shift() {
    if (this.length === 0) {
      throw new Error("Array is empty");
    }
    const firstItem = this.data[0];
    for (let i = 1; i < this.length; i++) {
      this.data[i - 1] = this.data[i];
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }

  deleteByIndex(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index out of range");
    }

    const deletedItem = this.data[index];
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return deletedItem;
  }
}

const myNewArray = new MyArray();
myNewArray.push("John");
myNewArray.push("Jane");
myNewArray.push("Doe");

// console.log(myNewArray.get(1));
// console.log(myNewArray.pop());
// console.log(myNewArray.shift());
console.log(myNewArray.deleteByIndex(1));

console.log(myNewArray);
