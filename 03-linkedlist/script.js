"use struct";

window.addEventListener("load", start);

function start() {
  console.log("STARTING PROGRAM...");
  const hello = createLinkedList();

  console.log(hello);
}

function createLinkedList() {
  return new LinkedList("hello", "world");
}

class LinkedList {
  constructor(param1, param2) {
    this.param1 = param1;
    this.param2 = param2;
  }

  method1() {
    console.log(param1 + param2);
  }
}
