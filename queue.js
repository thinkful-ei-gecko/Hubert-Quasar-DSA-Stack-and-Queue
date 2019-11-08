class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(item) {
    const node = new _Node(item)
    
    if(this.head === null) {
      this.head = node;
    } 
    if(this.tail) {
      this.tail.next = node;
    }
    this.tail = node;
  }

  dequeue() {
    if(this.head === null) {
      return;
    }

    let node = this.head;
    this.head = this.head.next;
    if(node === this.tail) {
      this.tail = null
    }
    return node.value;
  }
}

function main() {
  const starTrekQ = new Queue();

  starTrekQ.enqueue('Kirk')
  starTrekQ.enqueue('Spock')
  starTrekQ.enqueue('Uhura')
  starTrekQ.enqueue('Sulu')
  starTrekQ.enqueue('Checkov')

  //starTrekQ.dequeue();
  //starTrekQ.dequeue();
  display(starTrekQ);
}
main()

function peek(queue) {
  return queue.head
}

function isEmpty(queue) {
  if(queue.head === null) {
    console.log('Queue is empty')
  } else {
    console.log('Queue has data')
  }
}

function display(queue) {
  let node = queue.head;

  while(node !== null) {
    console.log(node.value)
    node = node.next;
  }
}
