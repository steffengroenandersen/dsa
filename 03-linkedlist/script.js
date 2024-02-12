"use struct";

window.addEventListener("load", start);

function start() {
  console.log("STARTING PROGRAM...");

  const head = {
    next: null,
    data: "HEAD",
  };

  const tail = {
    prev: null,
    data: "TAIL",
  };

  const node1 = {
    prev: null,
    next: null,
    data: "A",
  };

  const node2 = {
    prev: null,
    next: null,
    data: "B",
  };

  const node3 = {
    prev: null,
    next: null,
    data: "C",
  };

  const newList = new LinkedList(head, tail);
  newList.addLast(node1);
  newList.addLast(node2);
  newList.addLast(node3);
  newList.dumpList();

  const node4 = {
    data: "D",
  };
  //newList.addLast(node4);
  newList.addFirst(node4);
  newList.dumpList();

  //const emptyList = new LinkedList();
  //emptyList.dumpList();
}

class LinkedList {
  constructor() {
    this.tail = { prev: null, data: "TAIL" };
    this.head = { next: this.tail, data: "HEAD" };
    this.tail.prev = this.head;
  }

  dumpList() {
    console.log("dumpList()");

    let aNode = this.head;

    while (aNode != null) {
      console.log(`
        node: ${aNode.data}
        ------------
        prev: ${aNode.prev ? aNode.prev.data : null}
        next: ${aNode.next ? aNode.next.data : null}
      `);

      aNode = aNode.next;
    }
  }

  addLast(newNode) {
    console.log("addLast()");

    newNode.prev = this.tail.prev;
    newNode.prev.next = newNode;
    newNode.next = this.tail;
    this.tail.prev = newNode;
  }

  addFirst(newNode) {
    console.log("addFirst()");

    newNode.prev = this.head;
    newNode.next = this.head.next;
    newNode.next.prev = newNode;
    this.head.next = newNode;
  }
}
